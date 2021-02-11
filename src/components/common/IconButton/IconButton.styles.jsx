import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  transition: 0.5s;
  padding: 4px;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  color: ${({ color }) => (color ? color : "#666")};
  width: 100%;
  text-decoration: none;

  &:hover {
    color: ${({ color }) => (color ? color : "#666")};
  }

  @media only screen and (max-width: 300px) {
    font-size: 0.9rem;
  }
`;
export const Title = styled.div`
  font-size: 0.8rem;
  padding: 2px 0;
  padding-top: 4px;
  text-align: center;
  box-sizing: border-box;

  @media only screen and (max-width: 325px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 290px) {
    font-size: 0.6rem;
    font-family: iransans-bold;
  }
`;
