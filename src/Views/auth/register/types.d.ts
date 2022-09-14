import CSS from "csstype";

export type TBtn = {
  backgroundColor?: CSS.Property.BackgroundColor;
  color?: CSS.Property.Color;
};

export type TSpan = {
  color?: CSS.Property.Color;
};

export type TDataForm = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export type TAuthRegister = {
  data: {
    formState: TDataForm;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitData: (e: FormEvent<HTMLFormElement>) => void;
};
