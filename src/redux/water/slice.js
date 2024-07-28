import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addWater,
  changeWater,
  deleteWater,
  fetchDailyWater,
  fetchMonthlyWater,
} from './operations.js';

export const waterSlice = createSlice({
  name: 'water',
  initialState: initialState,
  reducers: {
    changeWaterCardId(state, { payload }) {
      state.chosenWaterCardId = payload;
    },
    changeModal(state, action) {
      state.modalFlags.isModalOpen = action.payload;
    },
    setChosenDate(state, { payload }) {
      state.chosenDate = payload;
    },
    changeWaterModalEdit(state, action) {
      state.modalFlags.isWaterModalEdit = action.payload;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalAdd = false;
    },
    changeWaterModalAdd(state, action) {
      state.modalFlags.isWaterModalAdd = action.payload;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeDeleteWaterModalOpen(state, action) {
      state.modalFlags.isDeleteWaterModalOpen = action.payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeUsersSettingsModalOpen(state, action) {
      state.modalFlags.isUsersSettingsModalOpen = action.payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeLogoutModalOpen(state, action) {
      state.modalFlags.isLogoutModalOpen = action.payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDailyWater.pending, state => {
        state.error = null;
      })
      .addCase(addWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(changeWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchMonthlyWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.dailyItems = payload;
      })
      .addCase(changeWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(fetchDailyWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.dailyItems = payload.data;
      })
      .addCase(fetchMonthlyWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.monthlyItems = payload.data;
      })
      .addCase(changeWater.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(fetchDailyWater.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addWater.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteWater.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(fetchMonthlyWater.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});
export const {
  changeModal,
  setChosenDate,
  changeWaterModalEdit,
  changeWaterModalAdd,
  changeDeleteWaterModalOpen,
  changeUsersSettingsModalOpen,
  changeLogoutModalOpen,
  changeWaterCardId,
} = waterSlice.actions;

export const waterReducer = waterSlice.reducer;
