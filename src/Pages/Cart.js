import styled from "styled-components";
import Header from "../Components/Header";
import List from "../Layouts/List";
import Footer from "../Layouts/Footer";
import ItemList from "../Components/ItemList";
import { useCartContext } from "../Contexts/CartContext";

export default function Cart() {
  const { cart } = useCartContext();

  // const cart = [
  //   {
  //     productId: 0,
  //     name: "Tênis",
  //     description: "da Nike",
  //     price: 100.0,
  //     imageUrl: "#",
  //   },
  //   {
  //     productId: 1,
  //     name: "Tênis 2",
  //     description: "da Addidas",
  //     price: 200.0,
  //     imageUrl: "#",
  //   },
  // ];

  return (
    <Container>
      <Header text="Carrinho" />
      <List>{cart.length !== 0 ? cart.map((product) => <ItemList key={product.productId} product={product} />) : ""}</List>
      <Footer page="Carrinho" />
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
`;
