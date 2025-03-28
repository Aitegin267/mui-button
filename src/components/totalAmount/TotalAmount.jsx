import { Button } from "../UI/Button";
import styled from "styled-components";

const TotalAmount = ({ onClose, orders }) => {
  const totalAmount = orders.reduce((prevValue, currentValue) => {
    if(currentValue.amount > 1){
      return prevValue + currentValue.price * currentValue.amount;
    }
    return prevValue + currentValue.price;
  }, 0);

  

  return (
    <StyledTotalAmountBox>
      <StyledTotalAmountContent>
        <p>Total Amount</p>
        <p>${totalAmount}</p>
      </StyledTotalAmountContent>
      <StyledTotalAmountActions>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        {!!orders.length && <Button>Order</Button>}
      </StyledTotalAmountActions>
    </StyledTotalAmountBox>
  );
};

export default TotalAmount;

const StyledTotalAmountBox = styled.div`
  padding: 30px 32px;
`;
const StyledTotalAmountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p:nth-child(1) {
    color: rgb(34, 34, 34);
    font-size: 20px;
    font-weight: 700;
  }
  p:nth-child(2) {
    color: rgb(138, 43, 6);
    font-size: 22px;
    font-weight: 600;
    text-align: left;
  }
`;

const StyledTotalAmountActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;
