import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useAuthStore } from "./hooks/useAuthStore";
import { AppRouter } from "./router";
import { store } from "./store";

export const MelissaApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
