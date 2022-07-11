import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PaymentHeader from "../Components/PaymentHeader";
import PaymentDetails from "../Layouts/PaymentDetails";
import { useCartContext } from "../Contexts/CartContext";
import { useCardsContext } from "../Contexts/CardsContext";
import ItemList from "../Components/ItemList";

export default function Receipt() {
  const { cart, getTotal } = useCartContext();
  const { cards, selectedCardId } = useCardsContext();
  const { state } = useLocation();
  const { orderId } = state;

  const total = getTotal();
  // Falta adicionar qual cartão foi escolhido como forma de pagamento
  return (
    <Container>
      <PaymentHeader />
      <PaymentDetails>
        <p style={{ marginBottom: "42px" }}>Compra realizada com sucesso!</p>
        <ul style={{ listStyleType: "none", textAlign: "center" }}>
          <li>Registro da compra: #{orderId}</li>
        </ul>
        <p className="payment-method" style={{ marginBottom: "10px" }}>
          Itens
        </p>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ({product.selectedSize}) - R$ {product.price.toFixed(2).replace(".", ",")}
            </li>
          ))}
        </ul>
        <p className="payment-method">Total - R$ {total.toFixed(2).replace(".", ",")}</p>
        <p className="payment-method" style={{ margin: "0 0 10px" }}>
          Método de pagamento
        </p>
        <ItemList card={cards.find((el) => el._id === selectedCardId)} product={{}} />
      </PaymentDetails>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;
