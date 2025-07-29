// src/utils/axiosInstance.js
import axios from "axios";
import { getAdminApiUrl } from "../config/api";
import { getToken, clearAuthData } from "../utils/authUtils";

const instance = axios.create({
  baseURL: getAdminApiUrl("/"), // Dynamic API base URL from environment
  timeout: 10000, // 10 second timeout
});

// Add a request interceptor to include the token
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add content type if not present
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle authentication errors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response interceptor error:", error);

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      console.warn("Authentication failed, clearing auth data");
      clearAuthData();

      // Redirect to login if not already there
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    // Handle 403 Forbidden errors
    if (error.response?.status === 403) {
      console.warn("Access forbidden");
    }

    // Handle network errors
    if (!error.response) {
      console.error("Network error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default instance;
