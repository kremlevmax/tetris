import styled from "styled-components";

export const StyledStartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px 10px 16px;
  outline: none;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #8a8a8a;
    color: black;
  }
`;
