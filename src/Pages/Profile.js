import React from "react";
import { Link } from "react-router-dom";
import { IoPersonCircle, IoCreate } from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useUserContext } from "../Contexts/UserContext";
import Page from "../Layouts/Page";

export default function Profile() {
  const { user, setUser } = useUserContext();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disableInput, setDisableInput] = React.useState([true, true, true]);
  const [showSubmit, setShowSubmit] = React.useState(false);

  function handleClick(number) {
    disableInput[number] = !disableInput[number];
    setShowSubmit(true);
    setDisableInput({ ...disableInput });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {};
    if (name) {
      data.name = name;
    }
    if (email) {
      data.email = email;
    }
    if (password) {
      data.password = password;
    }
    if (Object.keys(data).length > 0 && window.confirm("Deseja realmente realizar as alterações?")) {
      const URL = `${process.env.REACT_APP_API_BASE_URL}/user`;
      const config = { headers: { authorization: `Bearer ${user.token}` } };
      const promise = axios.put(URL, data, config);
      promise.then((res) => {
        setUser(res.data);
        alert("Usuário modificado com sucesso");
      });
      promise.catch(() => alert("Ocorreu um erro"));
    }
  }

  return (
    <>
      <Background>
        <Link to="/">
          <FaArrowLeft className="icon" />
        </Link>
        <div className="image-container">
          <IoPersonCircle className="icon" />
        </div>
      </Background>
      <Container show={showSubmit}>
        <Page>
          <div className="user-info">
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
          </div>
          <section>
            <h1>Alterar Informações</h1>
            <span>Nome</span>
            <form onSubmit={handleSubmit}>
              <div className="input-button">
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder={user.name}
                  disabled={disableInput[0]}
                />
                <button
                  type="button"
                  onClick={() => {
                    handleClick(0);
                  }}
                >
                  <IoCreate className="icon" />
                </button>
              </div>
              <span>E-mail</span>
              <div className="input-button">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="e-mail"
                  placeholder={user.email}
                  disabled={disableInput[1]}
                />
                <button
                  type="button"
                  onClick={() => {
                    handleClick(1);
                  }}
                >
                  <IoCreate className="icon" />
                </button>
              </div>
              <span>Senha</span>
              <div className="input-button">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="********"
                  disabled={disableInput[2]}
                />
                <button
                  type="button"
                  onClick={() => {
                    handleClick(2);
                  }}
                >
                  <IoCreate className="icon" />
                </button>
              </div>
              <button className="submit" type="submit">
                Enviar
              </button>
            </form>
          </section>
        </Page>
      </Container>
    </>
  );
}

const Container = styled.div`
  z-index: 1;
  position: relative;
  height: calc(100vh - 190px);
  display: flex;
  justify-content: center;
  padding: 25px;
  margin-top: 190px;
  box-sizing: border-box;
  background: var(--gray-01);
  border-radius: 30px 30px 0px 0px;
  .user-info {
    margin-bottom: 30px;
  }
  form .submit {
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 40px;
    border: none;
    color: white;

    background: linear-gradient(180deg, #2de2de 0%, #2aaec0 100%);
    box-shadow: 0px 10px 16px 1px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
  h1 {
    align-self: start;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    color: var(--primary);
  }
  h3 {
    font-style: normal;
    font-weight: 275;
    font-size: 20px;
    line-height: 24px;
  }
  section {
    span {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: var(--primary);
    }
    h1 {
      text-align: start;
      margin-bottom: 10px;
    }
  }
  .input-button {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    input {
      width: 285px;
      height: 40px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px 0px 0px 15px;
      border: none;
      outline: none;
      background-color: white;
      padding: 13px 15px;
      color: var(--primary);
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
    }
    input:disabled {
      filter: brightness(0.9);
    }
    button {
      width: 40px;
      height: 40px;
      background: linear-gradient(180deg, #2de2de 0%, #2aaec0 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0px 15px 15px 0px;
      border: none;

      .icon {
        color: white;
        font-size: 20px;
      }
    }
  }
`;

const Background = styled.div`
  z-index: 0;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--primary);

  .image-container {
    width: 100vw;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      font-size: 130px;
      color: white;
    }
  }

  a .icon {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 30px;
    color: white;
  }
`;
