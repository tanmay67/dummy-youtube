import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
