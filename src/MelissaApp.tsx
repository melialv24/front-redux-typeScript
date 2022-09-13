import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const MelissaApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
