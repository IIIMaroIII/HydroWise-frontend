import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CONSTANTS from 'src/components/Constants/constants.js';

axios.defaults.baseURL = `${CONSTANTS.AXIOS.baseURL}`;

export const waterTemplate = createAsyncThunk(
  'water/waterTemplate',
  async () => {},
);
