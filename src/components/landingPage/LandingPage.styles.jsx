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
