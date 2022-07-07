import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import React from "react";
import { useUserContext } from "../Contexts/UserContext";
import Form from "../Components/Form";
import Logo from "../Components/Logo";
import Page from "../Layouts/Page";

export default function Login() {
  const navigate = useNavigate();
  const UserContext = useUserContext();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const URL = `${process.env.REACT_APP_API_BASE_URL}/signup`;
    const data = {
      name,
      email,
      password,
      confirmation,
    };

    const promise = axios.post(URL, data);
    promise.then((res) => {
      navigate("/login");
    });
    promise.catch((err) => {
      alert(err.response.data);
      setDisabled(false);
    });
  }

  const formData = {
    form: { onSubmit: handleSubmit },
    inputs: [
      {
        onChange: (e) => {
          setName(e.target.value);
        },
        value: name,
        placeholder: "Digite seu nome completo",
        required: true,
        type: "text",
        label: "NOME COMPLETO",
        disabled,
      },
      {
        onChange: (e) => {
          setEmail(e.target.value);
        },
        value: email,
        placeholder: "Digite seu endereço de e-mail",
        type: "email",
        label: "E-MAIL",
        required: true,
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
      {
        onChange: (e) => {
          setConfirmation(e.target.value);
        },
        value: confirmation,
        placeholder: "Digite novamente sua senha",
        type: "password",
        label: "CONFIRMAÇÃO DA SENHA",
        required: true,
        disabled,
      },
    ],
    button: {
      text: "Cadastrar",
      disabled,
    },
  };

  return (
    <Container>
      <Page>
        <Logo />
        <Form data={formData} />
        <span className="link">
          Já possui uma conta? <Link to="/login">Entrar</Link>
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
