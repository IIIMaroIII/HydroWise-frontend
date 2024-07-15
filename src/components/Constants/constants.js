const USERS_ENDPOINTS = {
  signUp: '/v1/users/register',
  signIn: '/v1/users/login',
  logout: '/v1/users/logout',
  refresh: '/v1/users/refresh',
};

const AXIOS = {
  baseURL: 'https://waterwise-backend.onrender.com',
};

const WATER_ENDPOINTS = {
  water: '/v1/water/',
  daily: '/v1/water/daily',
  monthly: '/v1/water/monthly',
};

const CONSTANTS = {
  USERS_ENDPOINTS,
  AXIOS,
  WATER_ENDPOINTS,
};
export default CONSTANTS;
