import React from "react";
import { UnAuthentication } from "./UnAuthentication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Holder } from "./App.styles";

function App() {
  return (
    <div className="App">
      <Container>
        <Holder>
          <UnAuthentication />
          <ToastContainer />
        </Holder>
      </Container>
    </div>
  );
}

export default App;
