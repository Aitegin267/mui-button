import styled from "styled-components";

export const Meals = ({ children }) => {
  return <StyledMeals>{children}</StyledMeals>;
};

const StyledMeals = styled.div`
  background: rgb(176, 176, 176);
  min-height: 500px;
  padding-top: 150px;
`;
