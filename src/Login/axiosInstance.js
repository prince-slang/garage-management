// src/utils/axiosInstance.js
import axios from "axios";
import { getAdminApiUrl } from "../config/api";

const instance = axios.create({
  baseURL: getAdminApiUrl("/"), // Dynamic API base URL from environment
});

// Add a request interceptor to include the token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("garageToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
