import styled from "styled-components";
import { useEffect } from "react";
// import { useCartContext } from "../Contexts/CartContext";
import { useCardsContext } from "../Contexts/CardsContext";
import { useUserContext } from "../Contexts/UserContext";
import PaymentHeader from "../Components/PaymentHeader";
import Footer from "../Layouts/Footer";
import PaymentDetails from "../Layouts/PaymentDetails";
import ItemList from "../Components/ItemList";
import NewCardItem from "../Layouts/NewCardItem";

export default function Payment() {
  // const { cart } = useCartContext();
  const { cards, getCards } = useCardsContext();
  const {
    user: { token },
  } = useUserContext();

  useEffect(() => {
    getCards(token);
  }, []);

  return (
    <Container>
      <PaymentHeader />
      <PaymentDetails>
        <p style={{ alignSelf: "flex-start" }}>Total:</p>
        <h6 className="price">R$ 300,00</h6>
        <ul>
          <li>AirForce 1 (T39) - R$ 150,00</li>
          <li>AirForce 2 (T42) - R$ 150,00</li>
        </ul>
        <h5 className="payment-method">Método de pagamento</h5>
        {cards.length !== 0 ? cards.map((card) => <ItemList key={card._id} page="Payment" card={card} product={{}} />) : ""}
        <NewCardItem />
        <Footer page="Payment" />
      </PaymentDetails>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;
