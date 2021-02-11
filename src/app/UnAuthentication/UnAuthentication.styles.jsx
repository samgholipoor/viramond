import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Holder = styled.div`
  width: 320px;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 320px;
  height: calc(100vh - 54px);
  background: #eee;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 5px;

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
