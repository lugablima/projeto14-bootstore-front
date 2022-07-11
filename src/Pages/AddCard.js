import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FaArrowLeft } from "react-icons/fa";
import { useUserContext } from "../Contexts/UserContext";
import Form from "../Components/Form";
import Logo from "../Components/Logo";
import Page from "../Layouts/Page";

dayjs.extend(customParseFormat);

export default function AddCard() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [cardNumber, setCardNumber] = React.useState("");
  const [validity, setValidity] = React.useState("");
  const [securityCode, setSecurityCode] = React.useState("");
  const [ownerName, setOwnerName] = React.useState(user.name);
  const [cpf, setCpf] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const URL = `${process.env.REACT_APP_API_BASE_URL}/cards`;
    const config = { headers: { authorization: `Bearer ${user.token}` } };
    const data = {
      cardNumber,
      validity: dayjs(validity, "YYYY-MM").format("MM/YY"),
      securityCode,
      ownerName,
      cpf,
      description,
    };

    const promise = axios.post(URL, data, config);
    promise.then(() => {
      alert("Cartão adicionado com sucesso.");
      navigate("/cards");
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
          setCardNumber(e.target.value);
        },
        value: cardNumber,
        placeholder: "0000.0000.0000.0000",
        required: true,
        type: "text",
        label: "NÚMERO",
        disabled,
      },
      {
        onChange: (e) => {
          setValidity(e.target.value);
        },
        value: validity,
        placeholder: "maio de 2020",
        type: "month",
        label: "VALIDADE",
        required: true,
        disabled,
      },
      {
        onChange: (e) => {
          setSecurityCode(e.target.value);
        },
        value: securityCode,
        placeholder: "000",
        type: "text",
        label: "CÓDIGO DE SEGURANÇA",
        required: true,
        disabled,
      },
      {
        onChange: (e) => {
          setOwnerName(e.target.value);
        },
        value: ownerName,
        placeholder: user.name,
        type: "text",
        label: "NOME",
        required: true,
        disabled,
      },
      {
        onChange: (e) => {
          setCpf(e.target.value);
        },
        value: cpf,
        placeholder: "000.000.000-00",
        type: "text",
        label: "CPF",
        required: true,
        disabled,
      },
      {
        onChange: (e) => {
          setDescription(e.target.value);
        },
        value: description,
        placeholder: "Descrição do cartão",
        type: "text",
        label: "DESCRIÇÃO",
        required: true,
        disabled,
      },
    ],
    button: {
      text: "CADASTRAR",
      disabled,
    },
  };

  return (
    <Container>
      <Page>
        <Logo />
        <Form data={formData} />
        <Link to="/">
          <FaArrowLeft className="icon" />
        </Link>
      </Page>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
  justify-content: center;
  background: var(--gradient-background);

  a .icon {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 30px;
    color: white;
  }
`;
