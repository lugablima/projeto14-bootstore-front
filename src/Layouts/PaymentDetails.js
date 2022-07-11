import styled from "styled-components";

const PaymentDetails = styled.div`
  width: 100%;
  height: 100%;
  background: var(--gray-01);
  border-radius: 30px 30px 0 0;
  padding: 25px;
  font: 500 28px/34px "Lato", sans-serif;
  text-align: center;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  .price {
    font-weight: 800;
    align-self: flex-start;
    margin-bottom: 15px;
  }

  ul {
    font: 300 16px/19px "Lato", sans-serif;
    margin-left: 4px;
    align-self: flex-start;
    list-style-type: disc;
    list-style-position: inside;
  }

  .payment-method {
    font-weight: 600;
    margin: 15px 0;
    align-self: flex-start;
  }
`;

export default PaymentDetails;
