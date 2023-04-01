import { createSlice, nanoid } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT_COUNT } from "./constants";

const initialState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT_COUNT, 1);
      state.messages.unshift({ ...action.payload, id: nanoid() });
    },
    clearMessages: (state, action) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
