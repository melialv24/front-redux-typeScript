import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { AuthLoginV } from "../Views";
import { useEffect } from "react";
import { AuthRegisterV } from "../Views/auth";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Routes>
      {status !== "not-authenticated" ? (
        <>
          <Route path="/auth/login" element={<AuthLoginV />} />
          <Route path="/auth/register" element={<AuthRegisterV />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/auth/login" element={<AuthLoginV />} />
        </>
      )}
    </Routes>
  );
};
