import styled from "styled-components";
import { useEffect } from "react";
import { useUserContext } from "../Contexts/UserContext";
import { useCardsContext } from "../Contexts/CardsContext";
import List from "../Layouts/List";
import NewCardItem from "../Layouts/NewCardItem";
import ItemList from "../Components/ItemList";

export default function Cards() {
  const { cards, getCards } = useCardsContext();
  const {
    user: { token },
  } = useUserContext();
  // const cards = [
  //   { productId: 0, cardNumber: "123123123123123", descriptionCard: "Primeiro cartão", date: "20/10/2019 18:00" },
  //   { productId: 1, cardNumber: "456456456456456", descriptionCard: "Segundo cartão", date: "21/10/2019 19:00" },
  // ];

  useEffect(() => {
    getCards(token);
  }, []);

  return (
    <Container>
      <List>
        <NewCardItem />
        {cards.length !== 0 ? (
          // eslint-disable-next-line no-underscore-dangle
          cards.map((card) => <ItemList key={card._id} card={card} product={{}} />)
        ) : (
          <p className="message-empty">Você ainda não tem nenhum cartão registrado :/</p>
        )}
      </List>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;

  .message-empty {
    font: 500 20px/24px "Lato", sans-serif;
    color: var(--primary);
    text-align: center;
    position: absolute;
    top: calc(50% - 24px);
  }
`;
