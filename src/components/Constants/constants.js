const USERS_ENDPOINTS = {
  signUp: '/v1/auth/register',
  signIn: '/v1/auth/login',
  logout: '/v1/auth/logout',
  refresh: '/v1/auth/refresh',
};

const AXIOS = {
  baseURL: 'https://waterwise-backend.onrender.com',
};

const CONSTANTS = {
  USERS_ENDPOINTS,
  AXIOS,
};
export default CONSTANTS;
