import axios from "axios";
const API_BASE_URL = "https://aspirenext-college-dashboard-backend.onrender.com";

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    // You can add authentication tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 500) {
      console.error('Server Error: Please try again later');
    } else if (error.response?.status === 404) {
      console.error('Resource not found');
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout: Please check your internet connection');
    }
    return Promise.reject(error);
  }
);

export { API, API_BASE_URL };
export default API;
