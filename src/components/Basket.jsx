import styled, { css, keyframes } from "styled-components";
import CartIcon from "../assets/basketIcon.svg";
import { useContext, useEffect, useState } from "react";
import { basketContext } from "./store/BasketContext";

export const Basket = ({ openBasket }) => {
  const { items } = useContext(basketContext);
  const [className, setClassName] = useState(true);

  useEffect(() => {
    setClassName(true);
    const timerId = setTimeout(() => {
      setClassName(false);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [items]);

  function countFoodAmount() {
    return items.reduce((curr, prev) => {
      return curr + prev.amount;
    }, 0);
  }
  return (
    <>
      <BasketWrapper onClick={openBasket} className={className}>
        <div>
          <img src={CartIcon} alt="" />
          <p>Your Cart</p>
        </div>
        <span>{countFoodAmount()}</span>
      </BasketWrapper>
    </>
  );
};

const bump = keyframes`
  from{
    transform: scale(0.9);
  }
  to{
    transform: translateY(1.1);
  }
`;

function playAnimation(props) {

  return props.className
    ? css`
        animation: ${bump} 0.3s linear;
      `
    : "";
}

const BasketWrapper = styled.div`
  ${playAnimation}
  border-radius: 30px;
  background: rgb(90, 31, 8);
  padding: 10px 25px;
  color: white;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  gap: 24px;
  user-select: none;
  width: 300px;

  span {
    border-radius: 30px;
    background: rgb(138, 43, 6);
    padding: 4px 20px;
    display: block;
    display: flex;
    align-items: center;

    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 700;
  }
  div {
    display: flex;
    gap: 13px;
    align-items: center;
  }
`;
