import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthReducer";
import { blogSlice } from "./BlogsReducer";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    blog: blogSlice.reducer,
  },
});
