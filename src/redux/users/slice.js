import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { logout, refresh, signIn, signUp, update } from './operations.js';

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.isLoggedIn = true;
        state.isLoading = null;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.email = payload.data.email;
        state.user.token = payload.data.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(update.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(update.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user.token = payload.data.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
