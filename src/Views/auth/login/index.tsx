import { ChangeEvent, FormEvent, useState } from "react";
import { AuthLoginC } from "./components";

const initialValues = {
  email: "",
  password: "",
};

export const AuthLoginV = () => {
  const [formState, setFormState] = useState(initialValues);

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
    console.log({ formState });
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
