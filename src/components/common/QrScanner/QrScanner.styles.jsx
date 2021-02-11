import styled from "styled-components";

export const QrReaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;
export const Button = styled.div`
  z-index: 99999;
  position: absolute;
  bottom: 5px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
