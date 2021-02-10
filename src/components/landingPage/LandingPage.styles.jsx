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
  width: 100%;
  height: 160px;
  margin: 5px 0;

  & > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const QrContainer = styled.div`
  width: 100%;
  height: 220px;
  margin: 5px 0;
  padding: 0 5px;

  & > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
