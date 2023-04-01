import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import commentsSlice from "./commentsSlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    comments: commentsSlice,
    chat: chatSlice,
    videos: videosSlice,
  },
});

export default store;
