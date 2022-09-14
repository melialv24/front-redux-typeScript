import { BoxColumn, BoxContainer, Btn, Container, Inputs } from "./styled";

import { FC } from "react";
import { TAuthRegister } from "./types";
import { Form } from "../login/styled";

export const AuthRegisterC: FC<TAuthRegister> = ({
  data: { formState },
  handleChange,
  handleSubmitData,
}) => (
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
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
            value={formState?.name}
          />
          <Inputs
            placeholder="Correo"
            type="email"
            name="email"
            onChange={handleChange}
            value={formState?.email}
          />
          <Inputs
            placeholder="Contraseña"
            name="password"
            type="password"
            onChange={handleChange}
            value={formState?.password}
          />
          <Inputs
            placeholder="Repetir contraseña"
            name="password2"
            type="password"
            onChange={handleChange}
            value={formState?.password2}
          />

          <Btn backgroundColor="white" type="submit" color="#805180ce">
            Registrarme
          </Btn>
        </Form>
      </BoxColumn>
    </BoxContainer>
  </Container>
);
