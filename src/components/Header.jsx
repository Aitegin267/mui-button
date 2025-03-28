import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { Basket } from "./Basket";
import { Modal } from "./UI/Modal";
import OrderBasket from "./totalAmount/OrderBasket";

export const Header = ({ basket, basketModalHandler }) => {
  return (
    <>
      <Modal isOpen={basket} onClose={basketModalHandler}>
        <OrderBasket onClose={basketModalHandler} />
      </Modal>
      <StyledHeader>
        <Wrapper>
          <StyledLogo>ReactMeals</StyledLogo>
          <Basket openBasket={basketModalHandler} />
        </Wrapper>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  background: ${COLORS.primary};
  padding-top: 10px;
  padding-bottom: 10px;
`;
const StyledLogo = styled.div`
  color: rgb(255, 255, 255);
  font-size: 38px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
