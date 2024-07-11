import storage from 'redux-persist/lib/storage';

const token = {
  key: 'token',
  storage,
  whitelist: ['token'],
  //   blacklist: ["contacts", "isError", "isLoading", "productData"],
};

export const persistConfig = {
  token,
};
