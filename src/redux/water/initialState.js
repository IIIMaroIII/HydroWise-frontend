export const initialState = {
  water: {
    dailyItems: [],
    totalVolume: 0,
    monthlyItems:[],
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
