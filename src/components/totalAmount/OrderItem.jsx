import styled from "styled-components";
import { Button } from "../UI/Button";

export const OrderItem = (props) => {
  const { id, amount, title, price, onRemoveByOne, onAddByOne } = props;
  return (
    <OrderBox>
      <div>{title}</div>
      <OrderBoxActions>
        <OrderDescription>
          <div>${price}</div>
          <span>x{amount}</span>
        </OrderDescription>
        <OrderItemButtons>
          <Button variant="withIcon" icon="+" onClick={() => onAddByOne(id)}/>
          <Button variant="withIcon" icon="-" onClick={() => onRemoveByOne(id)}/>
        </OrderItemButtons>
      </OrderBoxActions>
    </OrderBox>
  );
};

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 2px solid rgb(214, 214, 214);

  box-shadow: 0px 6px 12px 0px rgba(36, 36, 36, 0.08);
  padding: 23px 0 23px 0;
`;

const OrderBoxActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const OrderDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  width: 200px;
  div {
    color: rgb(173, 85, 2);
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
  }
  span {
    padding: 6px 14px;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 6px;
    text-align: center;
  }
`;

const OrderItemButtons = styled.div`
  display: flex;
  gap: 14px;
`;
