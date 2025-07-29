// Authentication utilities
export const AUTH_KEYS = {
  TOKEN: "garageToken",
  GARAGE_ID: "garageId",
  USER_TYPE: "userType",
  USER_NAME: "name",
  GARAGE_NAME: "garageName",
  GARAGE_EMAIL: "garageEmail",
  USER_ID: "userId",
  ROLE: "role",
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_KEYS.TOKEN);
  const garageId = localStorage.getItem(AUTH_KEYS.GARAGE_ID);
  return !!(token && garageId);
};

// Get authentication data
export const getAuthData = () => {
  return {
    token: localStorage.getItem(AUTH_KEYS.TOKEN),
    garageId: localStorage.getItem(AUTH_KEYS.GARAGE_ID),
    userType: localStorage.getItem(AUTH_KEYS.USER_TYPE),
    userName: localStorage.getItem(AUTH_KEYS.USER_NAME),
    garageName: localStorage.getItem(AUTH_KEYS.GARAGE_NAME),
    garageEmail: localStorage.getItem(AUTH_KEYS.GARAGE_EMAIL),
    userId: localStorage.getItem(AUTH_KEYS.USER_ID),
    role: localStorage.getItem(AUTH_KEYS.ROLE),
  };
};

// Set authentication data
export const setAuthData = (data) => {
  if (data.token) localStorage.setItem(AUTH_KEYS.TOKEN, data.token);
  if (data.garageId) localStorage.setItem(AUTH_KEYS.GARAGE_ID, data.garageId);
  if (data.userType) localStorage.setItem(AUTH_KEYS.USER_TYPE, data.userType);
  if (data.userName) localStorage.setItem(AUTH_KEYS.USER_NAME, data.userName);
  if (data.garageName)
    localStorage.setItem(AUTH_KEYS.GARAGE_NAME, data.garageName);
  if (data.garageEmail)
    localStorage.setItem(AUTH_KEYS.GARAGE_EMAIL, data.garageEmail);
  if (data.userId) localStorage.setItem(AUTH_KEYS.USER_ID, data.userId);
  if (data.role) localStorage.setItem(AUTH_KEYS.ROLE, data.role);
};

// Clear authentication data
export const clearAuthData = () => {
  Object.values(AUTH_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
};

// Validate token and redirect if needed
export const validateAuth = () => {
  const authData = getAuthData();

  if (!authData.token || !authData.garageId) {
    console.warn("No garageId found in localStorage or missing token");
    return false;
  }

  return true;
};

// Get garageId with fallback
export const getGarageId = () => {
  return (
    localStorage.getItem(AUTH_KEYS.GARAGE_ID) ||
    localStorage.getItem("garage_id") ||
    null
  );
};

// Get token with fallback
export const getToken = () => {
  return (
    localStorage.getItem(AUTH_KEYS.TOKEN) ||
    localStorage.getItem("token") ||
    null
  );
};

export default {
  isAuthenticated,
  getAuthData,
  setAuthData,
  clearAuthData,
  validateAuth,
  getGarageId,
  getToken,
  AUTH_KEYS,
};
