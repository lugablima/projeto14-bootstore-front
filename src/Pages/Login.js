import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Form from "../Components/Form";
import Logo from "../Components/Logo";
import Page from "../Layouts/Page";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    // TODO: Enviar dados para API
  }

  const formData = {
    form: { onSubmit: handleSubmit },
    inputs: [
      {
        onChange: (e) => {
          setEmail(e.target.value);
        },
        value: email,
        placeholder: "Digite seu endereço de e-mail",
        required: true,
        type: "email",
        label: "E-MAIL",
        disabled,
      },
      {
        onChange: (e) => {
          setPassword(e.target.value);
        },
        value: password,
        placeholder: "Digite sua senha",
        type: "password",
        label: "SENHA",
        required: true,
        disabled,
      },
    ],
    button: {
      text: "Entrar",
      disabled,
    },
  };

  return (
    <Container>
      <Page>
        <Logo />
        <Form data={formData} />
        <span className="link">
          Ainda não cadastrado? <Link to="/singup">Crie uma conta</Link>
        </span>
      </Page>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
  justify-content: center;
  background: var(--gradient-background);

  .link {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-04);

    a {
      color: var(--secondary);
    }
  }
`;
