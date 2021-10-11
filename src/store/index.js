import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localforage from "localforage";

import courseReducer from "./courses";

const persistConfig = {
  key: "courses",
  version: 1,
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, courseReducer);

const store = configureStore({
  reducer: {
    courses: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;