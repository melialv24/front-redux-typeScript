import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { AuthLoginC } from "./components";

const initialValues = {
  email: "",
  password: "",
};

export const AuthLoginV = () => {
  const [formState, setFormState] = useState(initialValues);
  const { startLogin } = useAuthStore();

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
    console.log({ email: formState.email, password: formState.password });
    startLogin({ email: formState.email, password: formState.password });
  };
  return (
    <AuthLoginC
      data={{
        formState,
      }}
      handleChange={onInputChange}
      handleSubmitData={handleSubmitData}
    />
  );
};
