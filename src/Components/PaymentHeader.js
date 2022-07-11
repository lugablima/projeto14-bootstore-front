import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HeaderArrow from "../Layouts/HeaderArrow";

export default function PaymentHeader() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderArrow />
      <h1 onClick={() => navigate("/")}>
        boot<span>store</span>
      </h1>
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

  & > h1 {
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
