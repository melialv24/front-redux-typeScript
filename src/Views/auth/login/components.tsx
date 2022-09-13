import {
  BoxColumn,
  BoxContainer,
  Btn,
  Container,
  Form,
  Inputs,
  Span,
  Titles,
} from "./styled";
import { FC, FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TOnChangeInput, TOnChangeSelect, useFormTools } from "form-tool";
import { TDataError, TDataForm } from "./types";

export const AuthLoginC = () => {
  const [handleChange, handleSubmit, { dataForm, errorForm, setForcedData }] =
    useFormTools<TDataForm, TDataError>();

  const handleSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = dataForm;
    console.log(email, password);
  };

  return (
    <Container>
      <BoxContainer>
        <BoxColumn>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              color="white"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <Form onSubmit={handleSubmitData}>
            <Inputs
              placeholder="Correo"
              name="email"
              onChange={handleChange}
              value={dataForm?.email}
            />
            <Inputs
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
              value={dataForm?.password}
            />

            <Btn backgroundColor="white" type="submit" color="#805180ce">
              Iniciar Sesión
            </Btn>
          </Form>

          <NavLink
            to="/auth/register"
            style={{
              outline: "none",
              textDecoration: "none",
              marginTop: "20px",
            }}
          >
            <Span>¿Nuevo en nuestra plataforma?</Span>
          </NavLink>
        </BoxColumn>
      </BoxContainer>
    </Container>
  );
};
