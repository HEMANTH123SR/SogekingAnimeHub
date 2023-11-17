import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  userInfo: {
    email: "",
    id: "",
  },
  logInBtnCliked: false,
  hamBurgerBtnCliked: false,
};

export const authSlice = createSlice({
  name: "AuthApp",
  initialState: intialState,
  reducers: {
    handleLoginBtnCliked: (state) => {
      state.logInBtnCliked = !state.logInBtnCliked;
    },
    handleHamBurgerCliked: (state) => {
      state.hamBurgerBtnCliked = !state.hamBurgerBtnCliked;
    },
  },
});

export const { handleLoginBtnCliked,  handleHamBurgerCliked } =
  authSlice.actions;
