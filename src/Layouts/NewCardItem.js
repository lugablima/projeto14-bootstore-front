import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";

export default function NewCardItem() {
  const navigate = useNavigate();

  return (
    <NewCardContainer onClick={() => navigate("/new-card")}>
      <div>
        <IoAddCircle />
      </div>
      <p>Adicionar novo cartão</p>
    </NewCardContainer>
  );
}

const NewCardContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font: 500 20px/24px "Lato", sans-serif;
  text-align: left;
  background: var(--gray-02);
  border-radius: 15px;

  & > div {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-right: 10px;
    background: #2cd6d7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 34px;
  }

  p {
    color: var(--primary);
  }
`;
