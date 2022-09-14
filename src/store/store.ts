import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
}

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}
