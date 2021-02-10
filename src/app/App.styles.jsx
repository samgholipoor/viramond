import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Holder = styled.div`
  background: #eee;
  width: 320px;
  height: 100%;
  display: flex;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
