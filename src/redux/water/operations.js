import { createAsyncThunk } from '@reduxjs/toolkit';
import { formatISO, parseISO } from 'date-fns';
import CONSTANTS from 'src/components/Constants/constants.js';
import { AxiosWithCredentials } from 'src/utils/axios.js';

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ waterValue, time }, { rejectWithValue }) => {
    try {
      const response = await AxiosWithCredentials.post(
        `${CONSTANTS.WATER_ENDPOINTS.water}`,
        { waterValue, time },
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, { rejectWithValue }) => {
    try {
      const response = await AxiosWithCredentials.delete(
        `${CONSTANTS.WATER_ENDPOINTS.water}/${id}`,
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const changeWater = createAsyncThunk(
  'water/changeWater',
  async ({ id, updateVolume }, { rejectWithValue }) => {
    try {
      const response = await AxiosWithCredentials.patch(
        `${CONSTANTS.WATER_ENDPOINTS.water}/${id}`,
        updateVolume,
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchDailyWater = createAsyncThunk(
  'water/fetchDaily',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { chosenDate } = getState().water;
      console.log('typeof ChosenDate in Thunk', typeof chosenDate);
      const url = `${CONSTANTS.WATER_ENDPOINTS.daily}?chosenDate=${chosenDate}`;
      const response = await AxiosWithCredentials.get(url);
      console.log(
        'typeof response[0].data.date in Thunk',
        typeof response.data[0].date,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchMonthlyWater = createAsyncThunk(
  'water/fetchMonthly',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { chosenDate } = getState().water;
      const url = `${CONSTANTS.WATER_ENDPOINTS.monthly}?chosenDate=${chosenDate}`;
      const response = await AxiosWithCredentials.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  // async ({ month, year }, { rejectWithValue }) => {
  //   try {
  //     const response = await AxiosWithCredentials.get(
  //       `${CONSTANTS.WATER_ENDPOINTS.monthly}/${month}/${year}`,
  //     );
  //     console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // },
);
