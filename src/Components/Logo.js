import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <div className="border-bottom">
        <span>
          boot
          <b>store</b>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  margin-bottom: 20px;
  background: transparent;
  font-family: "Bree Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
  color: white;
  border: none;

  .border-bottom {
    text-align: center;
    width: 200px;
    border-bottom: 1px solid var(--secondary);
  }

  b {
    color: var(--secondary);
  }
`;
