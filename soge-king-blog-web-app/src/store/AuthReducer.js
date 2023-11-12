import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isLogedIn: false,
  userInfo: {
    email: "",
    password: "",
  },
  logInBtnCliked: false,
  hamBurgerBtnCliked:false,
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
    handleHamBurgerCliked:(state)=>{
      state.hamBurgerBtnCliked=!state.hamBurgerBtnCliked;
    }
  },
});

export const { handleLoginBtnCliked, handleIsLogedIn ,handleHamBurgerCliked} = authSlice.actions;
