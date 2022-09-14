import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { onchecking, onLogin, onLogout, clearErrorMessage } from "../store";
import { useAppSelector } from "./useActionsAxios";
import { TError } from "./types";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(onchecking());

    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      console.log(data, "data");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-data", String(new Date().getTime()));
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => {
    dispatch(onchecking());
    try {
      const { data } = await calendarApi.post("/auth/new", {
        email,
        password,
        name,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-data", String(new Date().getTime()));
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log(error as TError);
      //dispatch(onLogout(error.response.data?.msg || "---"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout("No hay error"));

    try {
      const { data } = await calendarApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-data", String(new Date().getTime()));
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout("No hay error"));
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout("No hay error"));
  };

  return {
    //Propiedades
    status,
    user,
    errorMessage,

    // Métodos
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
