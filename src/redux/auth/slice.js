import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { login, logout, refreshCurrentUser, register } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = null;
        state.error = null;
        console.log('Register has been successful🎊');
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
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
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
