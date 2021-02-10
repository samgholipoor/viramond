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
import { SearchForm } from "../searchForm/SearchForm";

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
          <QrSelector
            qrResult={qrResult}
            setToggle={setToggle}
            setQrResult={setQrResult}
          />
        ) : (
          <QrContainer>
            <QrScanner setValue={setQrResult} setToggle={setToggle} />
          </QrContainer>
        )}
        <SearchForm />
      </Holder>
    </Container>
  );
};

export { LandingPageComponent };
