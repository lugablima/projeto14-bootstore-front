import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PaymentHeader() {
  return (
    <Container>
      <Link to="/">
        boot<span>store</span>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 130px;
  background: var(--primary);
  display: flex;
  justify-content: center;
  margin-top: 60px;

  & > a {
    width: 200px;
    height: 54px;
    font: 400 36px/49px "Bree Serif", serif;
    text-align: center;
    color: #fff;
    border-bottom: 1px solid var(--secondary);
    margin: 10px 0 66px;
  }

  span {
    color: var(--secondary);
  }
`;
