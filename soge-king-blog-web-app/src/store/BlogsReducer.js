import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOfBlogs: [],
  blogsLoading:true
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    setListOfBlogs: (state, action) => {
      state.listOfBlogs = action.payload.documents;
    },
    handleBlogsLoading:(state,action)=>{
state.blogsLoading=action.payload.bool
    }
  },
});

export const { setListOfBlogs,handleBlogsLoading } = blogSlice.actions;
