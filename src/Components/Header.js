import styled from "styled-components";
import { IoChevronBackOutline, IoHome, IoMenu, IoPersonCircle, IoArrowBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

function CartHeader() {
  const navigate = useNavigate();
  return (
    <>
      <IoChevronBackOutline onClick={() => navigate(-1)} />
      <p>Carrinho</p>
      <IoHome onClick={() => navigate("/")} />
    </>
  );
}

function DefaultHeader({ path }) {
  const navigate = useNavigate();
  return (
    <>
      <IoMenu />
      <p>{path === "/" ? "bootstore" : "Cartões"}</p>
      <IoPersonCircle onClick={() => navigate("/profile")} />
    </>
  );
}

function HeaderArrow() {
  const navigate = useNavigate();

  return (
    <>
      <IoArrowBack size={38} onClick={() => navigate(-1)} />
    </>
  );
}

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  function RenderHeader() {
    let header;
    if (path === "/cart") header = <CartHeader />;
    else if (path === "/" || path === "/cards") header = <DefaultHeader path={path} />;
    else header = <HeaderArrow />;

    return header;
  }

  const header = RenderHeader();

  return <div>{path === "/login" || path === "/signup" ? "" : <Container path={path}>{header}</Container>}</div>;
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 12px 15px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(prop) => (prop.path.includes("/product/") ? "transparent" : "var(--primary)")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  color: #fff;
  font-size: 30px;
  p {
    width: 122px;
    height: 34px;
    font: 400 24px/33px "Bree Serif", serif;
    border-bottom: 0.67px solid var(--secondary);
    text-align: center;
  }
`;
