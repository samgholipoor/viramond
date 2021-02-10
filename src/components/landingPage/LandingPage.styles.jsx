import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Holder = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  width: 50%;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ContextContainer = styled.div`
  width: 50%;
  color: #fff;
  direction: rtl;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  font-family: iransans-regular;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  direction: rtl;
  text-align: right;
  width: 100%;
  font-family: iransans-bold;
  font-size: 2.6rem;
  padding: 10px 0;
  margin: 10px 0;
`;
export const Title2 = styled.h2`
  width: 100%;
  font-size: 1.6rem;
  padding: 10px 0;
  line-height: 35px;
`;
export const Description = styled.div`
  width: 100%;
  font-size: 1.1rem;
  padding: 10px 0;
  line-height: 28px;
  margin-bottom: 10px;
`;
