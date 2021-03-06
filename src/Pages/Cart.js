import styled from "styled-components";
import List from "../Layouts/List";
import ItemList from "../Components/ItemList";
import { useCartContext } from "../Contexts/CartContext";

export default function Cart() {
  const { cart } = useCartContext();

  // const cart = [
  //   {
  //     _id: 0,
  //     name: "Tênis",
  //     description: "da Nike",
  //     price: 100.0,
  //     image: "#",
  //   },
  //   {
  //     _id: 1,
  //     name: "Tênis 2",
  //     description: "da Addidas",
  //     price: 200.0,
  //     image: "#",
  //   },
  // ];

  return (
    <Container>
      <List>
        {cart.length !== 0 ? (
          cart.map((product, index) => <ItemList key={index} product={product} card={{}} />)
        ) : (
          <p className="message-empty">Seu carrinho está vazio :/</p>
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
