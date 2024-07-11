import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsList = createAsyncThunk(
  'contacts/getContactsList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/contacts');

      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post('/contacts', data);
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.delete(`/contacts/${id}`, id);
      if (res.status > 300) {
        return rejectWithValue(res.statusText);
      }
      dispatch(getContactsList());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
