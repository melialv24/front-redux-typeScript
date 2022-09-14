import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { AuthRegisterC } from "./components";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const AuthRegisterV = () => {
  const [formState, setFormState] = useState(initialValues);
  const { startRegister } = useAuthStore();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initialValues);
  };

  const handleSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState.password !== formState.password2) {
      Swal.fire("Register Error", "Las contraseñas deben ser iguales", "error");
      return;
    }
    startRegister({
      email: formState.email,
      password: formState.password,
      name: formState.name,
    });
    onResetForm();
  };

  return (
    <AuthRegisterC
      data={{
        formState,
      }}
      handleChange={onInputChange}
      handleSubmitData={handleSubmitData}
    />
  );
};
