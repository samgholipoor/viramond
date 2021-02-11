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
  max-width: 300px;
  height: 100%;
`;

export const Button = styled.div`
  z-index: 99999;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
