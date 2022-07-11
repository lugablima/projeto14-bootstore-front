import styled from "styled-components";
import React from "react";
import axios from "axios";
import Page from "../Layouts/Page";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

export default function Store() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const URL = `${process.env.REACT_APP_API_BASE_URL}/products`;

    const promise = axios.get(URL);
    promise.then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Container>
      <Header text="bootstore" />
      <Page>
        <div className="products-container">
          {products.length > 0 ? products.map((product, index) => <ProductCard key={index} product={product} />) : ""}
        </div>
      </Page>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
  justify-content: center;
  background: var(--gray-01);
  .products-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 90px;
  }
`;
