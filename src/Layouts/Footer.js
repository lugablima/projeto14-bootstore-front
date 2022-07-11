import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { IoCard, IoCart } from "react-icons/io5";
import { useCartContext } from "../Contexts/CartContext";

function FooterCart() {
  const navigate = useNavigate();
  const { cart } = useCartContext();

  function calculateTotalAmount() {
    let total = 0;

    cart.forEach((product) => {
      total += product.price;
    });

    return total;
  }

  const total = calculateTotalAmount();

  // Precisa verificar se o usuário tem algum item no carrinho

  return (
    <>
      <div>
        <p>
          Total: <span>R${total.toFixed(2).replace(".", ",")}</span>
        </p>
      </div>
      <button type="button" onClick={() => navigate("/payment")}>
        FINALIZAR
      </button>
    </>
  );
}

function FooterDefault() {
  const navigate = useNavigate();
  // Precisa colocar o ícone verde com a quantidade de items no carrinho
  return (
    <>
      <IoCard size={40} style={{ color: "#fff" }} onClick={() => navigate("/cards")} />
      <IoCart size={40} style={{ color: "#fff" }} onClick={() => navigate("/cart")} />
    </>
  );
}

function FooterPayment() {
  const navigate = useNavigate();
  // Precisa verificar se o usuário selecionou algum cartão
  return <FinishButton onClick={() => navigate("/receipt")}>FINALIZAR COMPRA</FinishButton>;
}

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;

  function RenderFooter() {
    let footer;
    if (path === "/cart") footer = <FooterCart />;
    else if (path === "/payment") footer = <FooterPayment />;
    else footer = <FooterDefault />;

    return footer;
  }

  const footer = RenderFooter();

  return <>{path === "/login" || path === "/signup" ? "" : <Container page={path}>{footer}</Container>}</>;
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: ${(prop) => (prop.page === "/cart" || prop.page === "/payment" ? "center" : "space-evenly")};
  align-items: center;
  background: var(--primary);
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;

  div:first-child {
    width: 50.93%;
    max-width: 191px;
    height: 40px;
    border-radius: 30px 0 0 30px;
    background: var(--gray-01);
    display: flex;
    justify-content: center;
    align-items: center;
    font: 600 15px/18px "Lato", sans-serif;
  }

  p {
    color: var(--primary);
  }

  span {
    color: var(--tertiary);
  }

  button[type="button"] {
    width: 33.07%;
    max-width: 124px;
    height: 40px;
    border-radius: 0 30px 30px 0;
    border: none;
    outline: none;
    padding: 0;
    background: var(--gradient-primary);
    font: 500 16px/19px "Lato", sans-serif;
    text-align: center;
    color: #fff;
  }
`;

const FinishButton = styled.button`
  width: 84%;
  max-width: 315px;
  height: 40px;
  border-radius: 30px;
  border: none;
  outline: none;
  padding: 0;
  background: var(--gradient-primary);
  box-shadow: 0px 10px 16px 4px rgba(0, 0, 0, 0.25);
  font: 500 16px/19px "Lato", sans-serif;
  text-align: center;
  color: #fff;
`;
