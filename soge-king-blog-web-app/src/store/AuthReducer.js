import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isLogedIn: false,
  userInfo: {
    email: "",
    password: "",
  },
  logInBtnCliked: false,
};

export const authSlice = createSlice({
  name: "AuthApp",
  initialState: intialState,
  reducers: {
    handleLoginBtnCliked: (state) => {
      state.logInBtnCliked = !state.logInBtnCliked;
    },
    handleIsLogedIn: (state) => {
      state.isLogedIn = true;
    },
  },
});

export const { handleLoginBtnCliked, handleIsLogedIn } = authSlice.actions;
