export const initialState = {
  water: {
    dailyItems: [],
    monthlyItems: [],
  },
  modalFlags: {
    isModalOpen: false,
    isWaterOpen: false,
    isDeleteWaterModalOpen: false,
    isUsersSettingsModalOpen: false,
    isLogoutModalOpen: false,
  },
  chosenDate: null,
  isLoading: false,
  error: null,
};
