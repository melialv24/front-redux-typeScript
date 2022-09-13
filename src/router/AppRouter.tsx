import { Routes, Route, Navigate } from "react-router-dom";
import { AuthLoginV } from "../Views";
import { AuthRegisterV } from "../Views/auth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<AuthLoginV />} />
      <Route path="/auth/register" element={<AuthRegisterV />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
