import { useState } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";

export const MealForm = ({onSubmit}) => {
  const [amountValue, setAmountvalue] = useState(1);

  function amountValueHandle(e) {
    setAmountvalue(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault() 
    onSubmit(amountValue) 
  }
  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledWrapper>
        <p>Amount</p>
        <StyledInput type="number" 
        value={amountValue}
         onChange={amountValueHandle} />
      </StyledWrapper>

      <Button children="+ ADD" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 50px;
  margin-left: 5px;
  border-radius: 5px;
`;
