import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CONSTANTS from 'src/components/Constants/constants.js';

axios.defaults.baseURL = `${CONSTANTS.AXIOS.baseURL}`;

// export const waterTemplate = createAsyncThunk(
//   'water/waterTemplate',
//   async () => {},
// );

export const fetchDailyWater = createAsyncThunk("water/fetchDaily",
    async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${CONSTANTS.WATER_ENDPOINTS.daily}`);
      console.log(response);
      return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const addWater = createAsyncThunk(
  'water/addWater',
  async (volume, thunkAPI) => {
    try {
      const response = await axios.post(`${CONSTANTS.WATER_ENDPOINTS.water}`,  volume );
      console.log(response);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`${CONSTANTS.WATER_ENDPOINTS.water}/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeWater=createAsyncThunk(
  'water/changeWater',
  async ({ id, updateVolume },thunkAPI) => {
    try {
        const response = await  axios.patch(`${CONSTANTS.WATER_ENDPOINTS.water}/${id}`, updateVolume);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchMonthlyWater = createAsyncThunk(
  'water/fetchMonthly',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${CONSTANTS.WATER_ENDPOINTS.monthly}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);