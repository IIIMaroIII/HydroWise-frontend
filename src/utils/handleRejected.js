export const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.payload.statusCode;
};
