import { createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from 'src/components/Constants/constants.js';
import AxiosWithCredentials from 'src/utils/axios.js';
import { changeModal } from '../water/slice.js';
import toast from 'react-hot-toast';

export const signUp = createAsyncThunk(
  'users/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.signUp}`,
        credentials,
      );
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const signIn = createAsyncThunk(
  'users/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.signIn}`,
        credentials,
      );
      console.log('res.data in sign in', res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(changeModal(false));
    try {
      await AxiosWithCredentials.post(`${CONSTANTS.USERS_ENDPOINTS.logout}`);
      toast.success('You have been successfully logged out, see you soon!');
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.response.message;
      toast.error(message);
      return rejectWithValue(message);
    }
  },
);

export const refresh = createAsyncThunk(
  'users/refresh',
  async (_, { rejectWithValue }) => {
    try {
      console.log('Attempting to call refresh endpoint...');
      const { data } = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.refresh}`,
      );
      console.log('data in refresh operations', data.data);
      // AxiosWithCredentials.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
      return data.data.accessToken;
    } catch (error) {
      console.log(
        'Refresh error response:',
        error.response ? error.response.data : error.message,
      );
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const update = createAsyncThunk(
  'users/update',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await AxiosWithCredentials.patch(
        `${CONSTANTS.USERS_ENDPOINTS.updateUser}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);
