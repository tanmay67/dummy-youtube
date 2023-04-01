import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const videosSlice = createSlice({
  name: "videos",
  initialState: initialState,
  reducers: {
    addVideos: (state, action) => {
      console.log(action.payload);
      state.push(...action.payload);
    },
    removeVideos: (state, action) => {
      state.length = 0;
    },
  },
});

export const { addVideos, removeVideos } = videosSlice.actions;
export default videosSlice.reducer;
