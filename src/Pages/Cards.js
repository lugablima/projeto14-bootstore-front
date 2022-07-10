import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { useEffect } from "react";
import { useUserContext } from "../Contexts/UserContext";
import { useCardsContext } from "../Contexts/CardsContext";
import Header from "../Components/Header";
import List from "../Layouts/List";
import ItemList from "../Components/ItemList";
import Footer from "../Layouts/Footer";

function NewCardItem() {
  const navigate = useNavigate();

  return (
    <NewCardContainer onClick={() => navigate("/new-card")}>
      <div>
        <IoAddCircle />
      </div>
      <p>Adicionar novo cartão</p>
    </NewCardContainer>
  );
}

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
      <Header text="Cartões" />
      <List>
        <NewCardItem />
        {cards.length !== 0 ? (
          // eslint-disable-next-line no-underscore-dangle
          cards.map((card) => <ItemList key={card._id} page="Cartões" card={card} product={{}} />)
        ) : (
          <p className="message-empty">Você ainda não tem nenhum cartão registrado :/</p>
        )}
      </List>
      <Footer page="Cartões" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
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

const NewCardContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font: 500 20px/24px "Lato", sans-serif;
  text-align: left;
  background: var(--gray-02);
  border-radius: 15px;

  & > div {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-right: 10px;
    background: #2cd6d7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 34px;
  }

  p {
    color: var(--primary);
  }
`;
