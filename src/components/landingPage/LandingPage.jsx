import React, { useState } from "react";
import { Container, Holder, ImageContainer } from "./LandingPage.styles";
import { Header } from "../common/Header";
import { QrScanner } from "../common/QrScanner";
import { QrSelector } from "../common/QrSelector";

const LandingPageComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [qrResult, setQrResult] = useState("");

  return (
    <Container>
      <Holder>
        <Header />
        <ImageContainer>
          <img src="/images/bg.jpg" alt="landingpage" />
        </ImageContainer>
        {!toggle ? (
          <QrSelector qrResult={qrResult} setToggle={setToggle} />
        ) : (
          <QrScanner setValue={setQrResult} setToggle={setToggle} />
        )}
      </Holder>
    </Container>
  );
};

export { LandingPageComponent };
