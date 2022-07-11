import styled from "styled-components";
import { IoTrashOutline, IoCard } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";
import { useCartContext } from "../Contexts/CartContext";
import { useCardsContext } from "../Contexts/CardsContext";

export default function ItemList({
  product: { productId, imageUrl, name, descriptionProduct, price },
  card: { _id, cardNumber, description, date },
}) {
  const location = useLocation();
  const path = location.pathname;
  const {
    user: { token },
  } = useUserContext();
  const { removeProductFromCart } = useCartContext();
  const { removeCard } = useCardsContext();

  function calculateFinalPrice() {
    let finalPrice = 0;

    if (path === "/cart") finalPrice = price.toFixed(2).replace(".", ",");

    return finalPrice;
  }

  function removeProductOrCard() {
    if (path === "/cart") removeProductFromCart(productId);
    else removeCard(_id, token);
  }

  const finalPrice = calculateFinalPrice();

  return (
    <Container path={path}>
      <div className="left">
        <div className="image">
          {path === "/cart" ? <img src={imageUrl} alt="produto" /> : <IoCard size={40} style={{ color: "#fff" }} />}
        </div>
        <div className="description">
          <div>
            <p>{path === "/cart" ? name : cardNumber}</p>
            <span>{path === "/cart" ? descriptionProduct : description}</span>
          </div>
          <p>{path === "/cart" ? `R$ ${finalPrice}` : <span style={{ fontWeight: 500 }}>Adicionado: {date}</span>}</p>
        </div>
      </div>
      {path === "/cart" || path === "/cards" ? (
        <div className="garbage">
          <IoTrashOutline onClick={() => removeProductOrCard()} />
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
  display: flex;
  font: 500 16px/19px "Lato", sans-serif;
  text-align: left;
  overflow: hidden;
  position: relative;
  .left {
    width: 100%;
    height: 100%;
    padding: 10px;
    background: var(--gray-02);
    border-radius: 15px;
    color: var(--primary);
    display: flex;
  }
  &:hover > .left {
    width: ${(props) => (props.path === "/payment" ? "100%" : "86.98%")};
    border-radius: ${(props) => (props.path === "/payment" ? "15px" : "15px 0 0 15px")};
  }
  .image {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-right: 10px;
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  .description {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .description > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  span {
    font: 300 14px/17px "Lato", sans-serif;
  }
  .garbage {
    width: 13.02%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 0 15px 15px 0;
    background: var(--primary);
    color: #fff;
    position: absolute;
    right: -41px;
    top: 0;
    bottom: 0;
  }
  &:hover > .garbage {
    right: 0;
  }
`;