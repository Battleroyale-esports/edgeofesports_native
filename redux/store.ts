import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slice/themeSlice";

export const store = configureStore({
  reducer: {
    themeSlice: themeReducer,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {theme: ThemeState}
export type AppDispatch = typeof store.dispatch;