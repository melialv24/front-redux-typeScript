import styled, { css } from "styled-components";
import { TBtn, TSpan } from "./types";

export const Container = styled.div`
  display: flex;
  background-image: url("https://i.pinimg.com/564x/c9/ec/39/c9ec39f943f8a1964be85144d593361b.jpg");
  //background-color: #ffffff;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const BoxContainer = styled.div`
  height: 400px;
  width: 400px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 1px 3px #88888820;
  background-color: #805180ce;
  border-radius: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titles = styled.h2`
  font-family: Poppins;
  color: white;
  font-size: 30px;
  letter-spacing: 1px;
`;

export const Inputs = styled.input`
  border: none;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 1px 3px #88888820;
  height: 40px;
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgb(222 67 193 / 25%);
  }
`;

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button<TBtn>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#805180ce"};
  color: ${({ color }) => color || "white"};
  font-size: 25px;
  width: 250px;
  padding: 5px 0px;
  margin-top: 10px;
  border: none;
  font-family: Poppins;
  font-weight: bold;
  border-radius: 5px;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Span = styled.span<TSpan>`
  font-size: "14px";
  color: ${({ color }) => color || "white"};
  font-family: Poppins;
  outline: none;
`;
