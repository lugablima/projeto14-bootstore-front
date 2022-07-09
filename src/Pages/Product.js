import React from "react";
import { useParams } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";
import { useCartContext } from "../Contexts/CartContext";
import Page from "../Layouts/Page";

function numberToReal(number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(number);
}

export default function Product() {
  const { productId } = useParams();
  const { addProductToCart } = useCartContext();
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    const URL = `${process.env.REACT_APP_API_BASE_URL}/product/${productId}`;

    const promise = axios.get(URL);
    promise.then((res) => setProduct({ ...res.data, selectedSize: "" }));
  }, []);

  return (
    <div>
      {Object.keys(product).length > 0 ? (
        <>
          <Background color={product.color}>
            <div className="image-container">
              <img src={product.image} alt="" />
            </div>
          </Background>
          <Container>
            <Page>
              <div className="product-header">
                <div className="product-info">
                  <h1>{product.name}</h1>
                  <h3>{numberToReal(product.price)}</h3>
                </div>
                <IoAddCircle
                  className="icon"
                  onClick={() => {
                    addProductToCart(product);
                  }}
                />
              </div>
              <span className="product-description">{product.description}</span>
              <h1 className="section-title">Selecione o tamanho</h1>
              <div className="product-sizes-container">
                {product.sizes.map((size, index) => (
                  <button
                    onClick={() => {
                      product.selectedSize = size;
                      setProduct({ ...product });
                    }}
                    type="button"
                    key={index}
                    className="size"
                    disabled={product.selectedSize === size}
                  >
                    <span>{size}</span>
                  </button>
                ))}
              </div>
            </Page>
          </Container>
        </>
      ) : (
        "CARREGANDO"
      )}
    </div>
  );
}

const Container = styled.div`
  z-index: 1;
  position: relative;
  height: calc(100vh - 190px);
  display: flex;
  justify-content: center;
  padding: 25px;
  margin-top: 190px;
  box-sizing: border-box;
  background: var(--gray-01);
  border-radius: 30px 30px 0px 0px;
  h1 {
    align-self: start;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    color: var(--primary);
  }
  .section-title {
    margin-bottom: 10px;
  }
  .product-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .product-header .icon {
    font-size: 60px;
  }
  .product-header .icon:active {
    filter: brightness(1.7);
  }
  .product-header .icon:focus-visible {
    filter: brightness(1);
  }
  .product-info h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
  }
  .product-info h3 {
    font-weight: 800;
    font-size: 28px;
    line-height: 34px;
  }
  .product-description {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: var(--primary);
    margin-bottom: 35px;
  }
  .product-sizes-container {
    align-self: start;
    display: flex;
    gap: 10px;
  }
  .size {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: var(--primary);
    border-radius: 50%;
    border: none;
    span {
      font-weight: 800;
      font-size: 28px;
      line-height: 34px;
      color: var(--gray-01);
    }
  }
  .size:disabled {
    opacity: 60%;
  }
`;

const Background = styled.div`
  z-index: 0;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.color ? props.color : "var(--tertiary)")};

  .image-container {
    width: 100vw;
    height: 190px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
