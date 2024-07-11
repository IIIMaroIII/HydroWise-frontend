export const selectUser = state => state.auth.user;
export const selectUserToken = state => state.auth.token;
export const selectUserIsLoggedIn = state => state.auth.isLoggedIn;
export const selectRefreshing = state => state.auth.isRefreshing;
