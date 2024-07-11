import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { handleToken } from 'src/utils/handleToken';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.set(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/login', credentials);
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.set(res.data.token);

      toast.success(
        `Welcome back ${res.data.user.name} 👋🏻 Nice to see you again 😉`,
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post('/users/logout');
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      handleToken.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const currentToken = getState().auth.token;
    // if (!currentToken) {
    //   return rejectWithValue();
    // }
    handleToken.set(currentToken);
    try {
      const res = await axios.get('/users/current');
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
