import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { addContact, getContactsList } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    clearState(state) {
      state.items = initialState.contacts.items;
    },
  },
  extraReducers: builder => {
    builder
      // Get Contacts
      .addCase(getContactsList.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getContactsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.isError = null;
      })
      .addCase(getContactsList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(addContact.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        state.isError = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });

    // .addCase(deleteContact.pending, (state, { payload }) => {
    //   state.isLoading = true;
    //   state.isError = null;
    // })
    // .addCase(deleteContact.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.items = state.items.filter(item => item.id !== payload);
    //   state.isError = null;
    // })
    // .addCase(deleteContact.rejected, (state, { payload }) => {
    //   state.isError = payload;
    // });
  },
});

export const { clearState } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
