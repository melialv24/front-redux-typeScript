import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { AuthLoginV } from "../Views";
import { useEffect } from "react";
import { AuthRegisterV, CalendarV } from "../Views";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/login" element={<AuthLoginV />} />
          <Route path="/auth/register" element={<AuthRegisterV />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarV />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
