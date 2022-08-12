import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  color: ${(props) => (props.gameOver ? "red" : "white")};
  background: rgba(255, 202, 58, 1);
  border: 4px solid;
  border-bottom-color: rgba(255, 202, 58, 0.1);
  border-right-color: rgba(255, 202, 58, 1);
  border-top-color: rgba(255, 202, 58, 1);
  border-left-color: rgba(255, 202, 58, 0.3);
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
