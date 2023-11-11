import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isLogedIn: false,
  userInfo: {},
  logInBtnCliked:false
};

export const authSlice = createSlice({
  name: "AuthApp",
  initialState: intialState,
  reducers: {
    logIn: (state, action) => {},
    logOut: (state, action) => {},
    handleLoginBtnCliked:(state)=>{
      state.logInBtnCliked=!state.logInBtnCliked
    }
  },
});

export const {logIn,logOut,handleLoginBtnCliked}=authSlice.actions;
