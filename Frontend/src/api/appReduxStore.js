import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { resAppi } from "./appi";

export const store = configureStore({
  reducer: {
    [resAppi.reducerPath]: resAppi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resAppi.middleware),
});

setupListeners(store.dispatch);
