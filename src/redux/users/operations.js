import { createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from 'src/components/Constants/constants.js';
import AxiosWithCredentials from 'src/utils/axios.js';

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
      // if (res.status > 300) {
      //   return rejectWithValue(res.message);
      // }
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
  async (_, { rejectWithValue }) => {
    try {
      await AxiosWithCredentials.post(`${CONSTANTS.USERS_ENDPOINTS.logout}`);
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const refresh = createAsyncThunk(
  'users/refresh',
  async (_, { rejectWithValue }) => {
    try {
      console.log('Attempting to call refresh endpoint...');
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.USERS_ENDPOINTS.refresh}`,
      );

      console.log('Refresh response:', res.data);
      return res.data;
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
