import styled from "styled-components";
import { IoChevronBackOutline, IoHome, IoMenu, IoPersonCircle } from "react-icons/io5";

export default function Header({ text }) {
  return (
    <Container>
      {text === "Carrinho" ? <IoChevronBackOutline /> : <IoMenu />}
      <p>{text}</p>
      {text === "Carrinho" ? <IoHome /> : <IoPersonCircle />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 12px 15px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primary);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  color: #fff;
  font-size: 26px;

  p {
    width: 122px;
    height: 34px;
    font: 400 24px/33px "Bree Serif", serif;
    border-bottom: 0.67px solid var(--secondary);
    text-align: center;
  }
`;
