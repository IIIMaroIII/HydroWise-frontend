import { selectUserToken } from 'src/redux/users/selectors.js';
import axios from 'axios';
import CONSTANTS from 'src/components/Constants/constants.js';
import store from 'src/redux/store.js';
import toast from 'react-hot-toast';
import { logout, refresh } from 'src/redux/users/operations.js';

const AxiosWithCredentials = axios.create({
  baseURL: CONSTANTS.DOMAINS.SERVER_LOCALHOST,
  withCredentials: true,
});

AxiosWithCredentials.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = selectUserToken(state);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    toast.error(error.message);
    return Promise.reject(error);
  },
);

AxiosWithCredentials.interceptors.response.use(
  res => res,
  async err => {
    console.log('err in interceptors', err);
    console.log('err.response in interceptors', err.response);
    const status = err?.response?.data.status || err?.response?.status || null;
    const statusText =
      err?.response?.data.message || err?.response?.statusText || null;

    const originalRequest = err.config;
    console.log('originalRequest', originalRequest);

    if (status === 401 && statusText === 'Missing session cookies') {
      toast(`${statusText}. Try to log in again.`);
      console.log('mission cookies with _retry');
      window.location.href = '/signin';
    } else if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('Status 401 detected, attempting to refresh token...');
      try {
        const result = await store.dispatch(refresh()).unwrap();
        console.log('result in interceptors response', result);

        originalRequest.headers.Authorization = `Bearer ${result}`;

        return AxiosWithCredentials(originalRequest);
      } catch (refreshError) {
        console.log('Refresh failed:', refreshError);

        toast('Your session has expired. Please login again');
        await store.dispatch(logout());
      }
    } else {
      console.log('mission cookies with _retry');
      window.location.href = '/';
      return;
    }
    if (status === 500 || status === 400 || status === 403 || status === 409) {
      return toast.error(statusText);
    }
    toast(statusText);

    return Promise.reject(err);
  },
);

export default AxiosWithCredentials;
