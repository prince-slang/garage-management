# Environment Configuration Setup

This document explains how to configure environment variables for the Garage Management Frontend application.

## Environment Variables

The application uses the following environment variables that should be configured in your `.env` file:

### API Configuration

```env
# Base URL for the API server
REACT_APP_API_BASE_URL=https://garage-management-zi5z.onrender.com

# API path for admin endpoints
REACT_APP_API_ADMIN_PATH=/api/admin

# API path for garage endpoints
REACT_APP_API_GARAGE_PATH=/api/garage
```

### Payment Configuration

```env
# Razorpay Key ID for payment processing
REACT_APP_RAZORPAY_KEY_ID=rzp_test_qjd934YSnvGxQZ
```

## Configuration Files

### 1. API Configuration (`src/config/api.js`)

This file centralizes all API configuration and provides helper functions:

- `getAdminApiUrl(endpoint)` - Returns full URL for admin API endpoints
- `getGarageApiUrl(endpoint)` - Returns full URL for garage API endpoints
- `getBaseApiUrl(endpoint)` - Returns full URL for base API endpoints

### 2. Axios Instance (`src/Login/axiosInstance.js`)

Updated to use dynamic base URL from environment variables instead of hardcoded values.

### 3. Job Cards (`src/pages/JobCards.js`)

Updated to use the centralized API configuration for all API calls.

## Usage Examples

### Using the API Configuration

```javascript
import { getAdminApiUrl, getGarageApiUrl } from "../config/api";

// For admin endpoints
const loginUrl = getAdminApiUrl("/login");

// For garage endpoints
const jobCardsUrl = getGarageApiUrl("/jobCards");

// For base API endpoints
const baseUrl = getBaseApiUrl("/some-endpoint");
```

### Environment Variable Access

```javascript
// Access environment variables
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;
```

## Setup Instructions

1. **Create `.env` file** in the root directory of your project
2. **Add the required environment variables** as shown above
3. **Restart your development server** after adding environment variables
4. **Verify configuration** by checking that API calls work correctly

## Important Notes

- All environment variables must be prefixed with `REACT_APP_` to be accessible in React applications
- Environment variables are embedded during build time, not runtime
- Changes to `.env` file require restarting the development server
- The `.env` file should be added to `.gitignore` to avoid committing sensitive information

## Default Values

If environment variables are not set, the application will use these default values:

- `REACT_APP_API_BASE_URL`: `https://garage-management-zi5z.onrender.com`
- `REACT_APP_API_ADMIN_PATH`: `/api/admin`
- `REACT_APP_API_GARAGE_PATH`: `/api/garage`

## Production Deployment

For production deployment:

1. Set the appropriate environment variables in your hosting platform
2. Ensure all API endpoints are correctly configured
3. Update the Razorpay key to production keys if needed
4. Test all API functionality after deployment
