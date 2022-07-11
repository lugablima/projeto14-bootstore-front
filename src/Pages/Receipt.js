import styled from "styled-components";
import HeaderArrow from "../Layouts/HeaderArrow";
import PaymentHeader from "../Components/PaymentHeader";
import PaymentDetails from "../Layouts/PaymentDetails";

export default function Receipt() {
  // Falta adicionar qual cartão foi escolhido como forma de pagamento
  return (
    <Container>
      <HeaderArrow />
      <PaymentHeader />
      <PaymentDetails>
        <p style={{ marginBottom: "42px" }}>Compra realizada com sucesso!</p>
        <p className="payment-method" style={{ marginBottom: "10px" }}>
          Itens
        </p>
        <ul>
          <li>AirForce 1 (T39) - R$ 150,00</li>
          <li>AirForce 2 (T42) - R$ 150,00</li>
        </ul>
        <p className="payment-method">Total - R$ 300,00</p>
        <p className="payment-method" style={{ margin: "0 0 10px" }}>
          Método de pagamento
        </p>
      </PaymentDetails>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;
