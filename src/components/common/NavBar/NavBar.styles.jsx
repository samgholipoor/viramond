import styled from "styled-components";

export const MobileDevice = styled.div`
  position: fixed;
  bottom: 0;
  right: 50%;
  transform: translate(50%);
  border-top: 1px solid #ccc;
  width: inherit !important;
  display: flex;
  background: #fff;
  justify-content: space-around;
  z-index: 9999;
`;
