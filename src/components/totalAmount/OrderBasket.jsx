import styled from "styled-components";
import TotalAmount from "./TotalAmount";
import {OrderItem} from "./OrderItem";
import { useContext } from "react";
import { basketContext } from "../../store/basketContext";

export const ORDERED_MEALS = []

const OrderBasket = ({ onClose }) => {
  const {items, onAddByOne, onRemoveByOne} = useContext(basketContext)
  return (
    <div>
      <OrderBox>
        {items.map((item) => {
          return <OrderItem key={item.id} onAddByOne={onAddByOne} onRemoveByOne={onRemoveByOne} {...item} />
        })}
      </OrderBox>
      <TotalAmount onClose={onClose} orders={items}/>
    </div>
  );
};

export default OrderBasket;

const OrderBox = styled.div`
  max-height: 200px;
  overflow: auto;
`;
