import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const QrReaderContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  max-width: 250px;
  height: 250px;
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
