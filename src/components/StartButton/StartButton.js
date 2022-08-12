import React from "react";
import styled from "styled-components";

const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 2px;
  border: none;
  color: white;
  background: #7b923f;
  text-transform: uppercase;
  /* font-family: Pixel, Arial, Helvetica, sans-serif; */
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: all 400ms ease;
  &:hover {
    background: #afba73;
  }
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
