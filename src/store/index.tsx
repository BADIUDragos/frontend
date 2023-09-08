import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./slices/userInfoSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectUserInfo = (state:RootState) => state.userInfo

export default store;
