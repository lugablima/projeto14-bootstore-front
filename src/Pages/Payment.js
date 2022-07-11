import styled from "styled-components";
import { useEffect } from "react";
import { useCartContext } from "../Contexts/CartContext";
import { useCardsContext } from "../Contexts/CardsContext";
import { useUserContext } from "../Contexts/UserContext";
import PaymentHeader from "../Components/PaymentHeader";
import PaymentDetails from "../Layouts/PaymentDetails";
import ItemList from "../Components/ItemList";
import NewCardItem from "../Layouts/NewCardItem";

export default function Payment() {
  const { cart, getTotal } = useCartContext();
  const { cards, getCards } = useCardsContext();
  const {
    user: { token },
  } = useUserContext();

  useEffect(() => {
    getCards(token);
  }, []);

  const total = getTotal();

  return (
    <Container>
      <PaymentHeader />
      <PaymentDetails>
        <p style={{ alignSelf: "flex-start" }}>Total:</p>
        <h6 className="price">R$ {total.toFixed(2).replace(".", ",")}</h6>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ({product.selectedSize}) - R$ {product.price.toFixed(2).replace(".", ",")}
            </li>
          ))}
        </ul>
        <h5 className="payment-method">Método de pagamento</h5>
        {cards.length !== 0 ? cards.map((card) => <ItemList key={card._id} card={card} product={{}} />) : ""}
        <NewCardItem />
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
