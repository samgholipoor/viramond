import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: ${({ bigsize }) => (bigsize ? "100%" : "")};
  transition: 0.4s;
  color: ${({ color }) => (color ? color : "#fff")};
  background: ${({ background }) => (background ? background : "#444")};
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  &:hover {
    filter: brightness(80%);
  }
  &:focus {
    outline: none;
  }
`;
