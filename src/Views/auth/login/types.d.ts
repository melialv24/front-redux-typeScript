import CSS from "csstype";

export type TBtn = {
  backgroundColor?: CSS.Property.BackgroundColor;
  color?: CSS.Property.Color;
};

export type TSpan = {
  color?: CSS.Property.Color;
};

export type TDataForm = {
  email: string;
  password: string;
};

export type TDataError = {
  email?: boolean;
  password?: boolean;
};
