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
  // currentDate: new Date(),
  chosenDate: new Date().toISOString(),
  isLoading: false,
  error: null,
};
