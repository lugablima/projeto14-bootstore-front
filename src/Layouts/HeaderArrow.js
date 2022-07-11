import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function HeaderArrow() {
  const navigate = useNavigate();

  return (
    <Container>
      <IoArrowBack onClick={() => navigate(-1)} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  font-size: 38px;
  padding: 10px;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: var(--primary);
`;
