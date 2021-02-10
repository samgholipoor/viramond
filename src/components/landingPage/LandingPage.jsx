import React, { useState } from "react";
import {
  Container,
  Holder,
  ImageContainer,
  QrContainer,
} from "./LandingPage.styles";
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
        <QrContainer>
          {!toggle ? (
            <QrSelector qrResult={qrResult} setToggle={setToggle} />
          ) : (
            <QrScanner setValue={setQrResult} setToggle={setToggle} />
          )}
        </QrContainer>
      </Holder>
    </Container>
  );
};

export { LandingPageComponent };
