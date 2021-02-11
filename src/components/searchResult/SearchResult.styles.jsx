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

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  background: #dc3545;
  border-radius: 0 0 15px 15px;
  color: #eee;
  position: sticky;
  top: 0;
`;

export const Back = styled.div`
  cursor: pointer;
  margin: 0 5px;
  padding: 0 5px;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  & > *:first-child {
    margin-right: 5px;
  }
`;
