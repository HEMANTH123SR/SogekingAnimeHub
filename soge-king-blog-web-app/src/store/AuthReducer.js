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
    logInStateHandler: (state, action) => {
      state.userInfo.email = action.payload.email;
      state.userInfo.password = action.payload.password;
    },
    logOutStateHandler: (state, action) => {},
    handleLoginBtnCliked: (state) => {
      state.logInBtnCliked = !state.logInBtnCliked;
    },
    handleIsLogedIn: (state) => {
      state.isLogedIn = true;
    },
  },
});

export const {
  logInStateHandler,
  logOutStateHandler,
  handleLoginBtnCliked,
  handleIsLogedIn,
} = authSlice.actions;
