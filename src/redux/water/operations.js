import { createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from 'src/components/Constants/constants.js';
import AxiosWithCredentials from 'src/utils/axios.js';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (formData, { getState, rejectWithValue }) => {
    try {
      const chosenDate = getState().water.chosenDate;
      formData.append('date', chosenDate);
      console.log('thunk request');
      const res = await AxiosWithCredentials.post(
        `${CONSTANTS.WATER_ENDPOINTS.water}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('res.data in thunk', res.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (_, { getState, rejectWithValue }) => {
    const id = getState().water.chosenWaterCardId;
    console.log(id);
    try {
      await AxiosWithCredentials.delete(
        `${CONSTANTS.WATER_ENDPOINTS.water}/${id}`,
      );

      const items = getState().water.water.dailyItems.filter(
        item => item._id !== id,
      );
      return items;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const changeWater = createAsyncThunk(
  'water/changeWater',
  async (formData, { rejectWithValue }) => {
    try {
      console.log('formData', formData);
      // const response = await AxiosWithCredentials.patch(
      //   `${CONSTANTS.WATER_ENDPOINTS.water}/${id}`,
      //   formData,
      // );
      // console.log(response);
      // return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchDailyWater = createAsyncThunk(
  'water/fetchDaily',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { chosenDate } = getState().water;
      console.log('chosenDate in operations', chosenDate);
      const url = `${
        CONSTANTS.WATER_ENDPOINTS.daily
      }?chosenDate=${encodeURIComponent(chosenDate)}`;
      const response = await AxiosWithCredentials.get(url);

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchMonthlyWater = createAsyncThunk(
  'water/fetchMonthly',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { chosenDate } = getState().water;
      console.log('chosenDate in operations', chosenDate);
      const url = `${
        CONSTANTS.WATER_ENDPOINTS.monthly
      }?chosenDate=${encodeURIComponent(chosenDate)}`;
      const response = await AxiosWithCredentials.get(url);

      // if (response.status === 401) {
      //   return rejectWithValue('Unauthorized');
      // }

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
