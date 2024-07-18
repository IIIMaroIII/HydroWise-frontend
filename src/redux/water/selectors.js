export const selectWaterItems = state => state.water.water.dailyItems;
export const selectTotalVolume = state => state.water.water.totalVolume;
export const selectMonthlyWaterItems = state => state.water.water.monthlyItems;
export const selectIsLoading = state => state.water.isLoading;
export const selectIsError = state => state.water.error;
export const selectModalFlags = state => state.water.modalFlags;
export const selectDate = state => state.water.chosenDate;


