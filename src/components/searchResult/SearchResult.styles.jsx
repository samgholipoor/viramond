import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Cart = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  padding: 2px 0;
  color: #444;

  & > *:first-child {
    margin-right: 5px;
  }
`;
