import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./state/user";
import chatReducer from "./state/chat";
import exploreReducer from "./state/explore";
import searchquery from "./state/searchquery";
import itenraryReducer from "./state/itenary";

const rootReducer = {
  user: userReducer,
  chat:chatReducer,
  explore:exploreReducer,
  searchquery:searchquery,
  itenrary:itenraryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;