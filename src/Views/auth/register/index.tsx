import { ChangeEvent, FormEvent, useState } from "react";
import { AuthRegisterC } from "./components";

const initialValues = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const AuthRegisterV = () => {
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
    <AuthRegisterC
      data={{
        formState,
      }}
      handleChange={onInputChange}
      handleSubmitData={handleSubmitData}
    />
  );
};
