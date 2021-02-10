import styled from "styled-components";

export const QrContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: iransans-regular;
`;
export const QrHolder = styled.div`
  transition: 0.4s;
  background-color: #dc3545;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 8px 1px rgba(0, 0, 0, 0.3);
  }
`;
export const Title = styled.div`
  font-size: 0.9rem;
`;
export const IconContainer = styled.div`
  font-size: 4rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

export const QrResultHolder = styled.div`
  padding: 10px;
  margin: 10px 12px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
export const QrResultTitle = styled.div`
  padding: 2px;
  text-align: right;
`;
export const QrResult = styled.div`
  padding: 5px;
`;
export const TitleContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ExitIcon = styled.div`
  padding: 5px;
  color: #444;
  cursor: pointer;
`;
