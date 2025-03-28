import styled from "styled-components";
import Background from "../assets/background.jpeg";
import { memo } from "react";

export const Summary = memo((props) => {
  return (
    <StyledDiv>
      <div>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious <br /> lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by <br />  experienced chefs!
        </p>
      </div>
    </StyledDiv>
  );
});

const StyledDiv = styled.div`
  background: url(${Background}) center center/cover no-repeat;
  min-height: 432px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  h1 {
    color: rgb(255, 255, 255);
    font-size: 36px;
    font-weight: 600;
    line-height: 54px;
    text-align: center;
    margin-bottom: 28px;
  }
  p {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  div {
    border-radius: 16px;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
    background: rgb(56, 56, 56);
    padding: 36px 54px;
    position: absolute;
    bottom: -120px;
  }
`;
