const USERS_ENDPOINTS = {
  signUp: '/v1/users/register',
  signIn: '/v1/users/login',
  logout: '/v1/users/logout',
  refresh: '/v1/users/refresh',
  requestResetPassword: '/request-reset-password',
  resetPassword: '/reset-pwd',
  getGoogleUrl: '/get-oauth-url',
  confirmGoogleAuhorization: '/confirm-oauth',
};

const AXIOS = {
  baseURL: 'http://localhost:3000',
};

const WATER_ENDPOINTS = {
  water: '/v1/water/',
  daily: '/v1/water/daily',
  monthly: '/v1/water/monthly',
};

const USER = {
  DEFAULT_USER_IMAGE:
    'https://img.icons8.com/?size=100&id=8VXh2TzKXNG8&format=png&color=000000',
};

const CONSTANTS = {
  USERS_ENDPOINTS,
  AXIOS,
  WATER_ENDPOINTS,
  USER,
};
export default CONSTANTS;
