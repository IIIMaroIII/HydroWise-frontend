import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { waterTemplate } from './operations.js';

export const waterSlice = createSlice({
  name: 'water',
  initialState: initialState.water,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(waterTemplate.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(waterTemplate.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.isError = null;
      })
      .addCase(waterTemplate.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const waterReducer = waterSlice.reducer;
