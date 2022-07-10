import { createContext, useContext, useState } from "react";
import axios from "axios";

const CardsContext = createContext();

export const useCardsContext = () => useContext(CardsContext);

export default function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);

  async function getCards(userToken) {
    const config = {
      headers: {
        Auhtorization: `Bearer ${userToken}`,
      },
    };
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/cards`, config);

      setCards(res.data);
    } catch (err) {
      alert("Houve um erro ao buscar os seus cartões, tente novamente mais tarde!", err.message);
    }
  }

  async function removeCard(cardId, userToken) {
    const config = {
      headers: {
        Auhtorization: `Bearer ${userToken}`,
      },
    };
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/cards/${cardId}`, config);
    } catch (err) {
      alert("Houve um erro ao deletar o seu cartão, tente novamente mais tarde!", err.message);
    }
  }

  return <CardsContext.Provider value={{ cards, getCards, removeCard }}>{children}</CardsContext.Provider>;
}
