import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideMenu: (state, action) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, hideMenu } = appSlice.actions;
export default appSlice.reducer;
