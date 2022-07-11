import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";
import { useCartContext } from "../Contexts/CartContext";

function numberToReal(number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(number);
}

export default function ProductCard({ product }) {
  const { addProductToCart } = useCartContext();

  return (
    <Link to={`/product/${product._id}`}>
      <Container color={product.color}>
        <div className="card-text-container">
          <div>
            <h1>{product.name}</h1>
            <h3>{numberToReal(product.price)}</h3>
          </div>
          <IoAddCircle
            className="icon"
            onClick={(e) => {
              e.preventDefault();
              addProductToCart(product);
            }}
          />
        </div>
        <img src={product.image} alt="tênis" />
      </Container>
    </Link>
  );
}

const Container = styled.button`
  width: 315px;
  height: 140px;
  background: ${(props) => (props.color ? props.color : "var(--tertiary)")};
  font-family: inherit;
  font-style: normal;
  color: white;
  border: none;
  border-radius: 15px;
  position: relative;
  text-align: start;
  padding: 0;
  &:focus-visible,
  &:hover {
    outline: none;
    filter: brightness(1.1);
  }
  img {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .card-text-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
  }
  h1 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  h3 {
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
  }
  .icon {
    z-index: 1;
    font-size: 36px;
  }
`;
