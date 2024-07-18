import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { initialState } from './initialState';
import {
  addWater,
  changeWater,
  deleteWater,
  fetchDailyWater,
  fetchMonthlyWater,
} from './operations.js';
import { formatISO } from 'date-fns';

const handleRejected = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};
export const waterSlice = createSlice({
  name: 'water',
  initialState: initialState,
  reducers: {
    changeModal(state, action) {
      state.modalFlags.isModalOpen = action.payload;
    },
    changeWaterModal(state, action) {
      state.modalFlags.isWaterOpen = action.payload;
    },
    changeDeleteWaterModalOpen(state, action) {
      state.modalFlags.isDeleteWaterModalOpen = action.payload;
    },

    changeUsersSettingsModalOpen(state, action) {
      state.modalFlags.isUsersSettingsModalOpen = action.payload;
    },

    changeLogoutModalOpen(state, action) {
      state.modalFlags.isLogoutModalOpen = action.payload;
    },

    //   changeChosenDate(state, {payload}) {
    //     state.chosenDate = formatISO(payload);
    //   },
    // },
    setChosenDate(state, { payload }) {
      state.chosenDate = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDailyWater.pending, handlePending)
      .addCase(addWater.pending, handlePending)
      .addCase(deleteWater.pending, handlePending)
      .addCase(changeWater.pending, handlePending)
      .addCase(fetchMonthlyWater.pending, handlePending)

      .addCase(fetchDailyWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.dailyItems = payload.data;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.water.dailyItems.push(action.payload);
        toast('You add a water record', {
          style: {
            borderRadius: '10px',
            background: 'rgb(144, 26, 228)',
            color: '#fff',
          },
        });
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.water.dailyItems = state.water.dailyItems.filter(
          item => item.id !== action.payload.id,
        );
      })

      // .addCase(changeWater.fulfilled, (state, action) => {
      //   state.isLoading = false;
      // const index = state.items.findIndex(contact => contact.id === action.payload.id);
      // if (index !== -1) {
      //   state.items[index] = action.payload;
      // }
      // })

      .addCase(fetchMonthlyWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.water.monthlyItems = action.payload.data;
      })

      .addCase(changeWater.rejected, handleRejected)
      .addCase(fetchDailyWater.rejected, handleRejected)
      .addCase(addWater.rejected, handleRejected)
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(fetchMonthlyWater.rejected, handleRejected);
  },
});
export const {
  changeModal,
  changeWaterModal,
  changeDeleteWaterModalOpen,
  changeUsersSettingsModalOpen,
  changeLogoutModalOpen,
  changeChosenDate,
  setChosenDate,
} = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
