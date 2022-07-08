import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";

export default function ItemList({ product: { imageUrl, name, description, price } }) {
  return (
    <Container>
      <div className="description">
        <img src={imageUrl} alt="produto" />
        <div>
          <div>
            <p>{name}</p>
            <span>{description}</span>
          </div>
          <p>R${price.toFixed(2).replace(".", ",")}</p>
        </div>
      </div>
      <div className="garbage">
        <IoTrashOutline />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 17px;
  display: flex;
  font: 500 16px/19px "Lato", sans-serif;
  text-align: left;
  overflow: hidden;
  position: relative;

  .description {
    width: 100%;
    height: 100%;
    padding: 10px;
    background: var(--gray-02);
    border-radius: 15px;
    color: var(--primary);
    display: flex;
  }

  &:hover > .description {
    width: 86.98%;
    border-radius: 15px 0 0 15px;
  }

  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    border-radius: 10px;
    background: var(--primary);
    object-fit: cover;
  }

  .description > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .description > div > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  span {
    font: 300 14px/17px "Lato", sans-serif;
  }

  .garbage {
    width: 13.02%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 0 15px 15px 0;
    background: var(--primary);
    color: #fff;
    position: absolute;
    right: -41px;
    top: 0;
    bottom: 0;
  }

  &:hover > .garbage {
    right: 0;
  }
`;
