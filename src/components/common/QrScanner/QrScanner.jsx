import React, { useState } from "react";
// import QrReader from "react-qr-scanner";
import QrReader from "react-qr-reader";
import { toast } from "react-toastify";

import { Button, QrReaderContainer, Container } from "./QrScanner.styles";

const QrScanner = ({ setValue, setToggle }) => {
  const [cameraMode, setCamerMode] = useState("environment");

  const handleScan = (text) => {
    setValue(text);
    text && setToggle(false);
  };

  const handleError = () => {
    setToggle(false);
    toast.error("سترسی به دوربین دستگاه شما مسدود است ، لطفا فعال کنید");
  };

  const changeMode = () => {
    cameraMode === "environment"
      ? setCamerMode("user")
      : setCamerMode("environment");
  };

  return (
    <Container>
      <QrReaderContainer>
        <QrReader
          delay={300}
          style={{
            height: "100%",
            width: "100%",
          }}
          onError={handleError}
          onScan={handleScan}
          facingMode={cameraMode}
        />
      </QrReaderContainer>

      <Button onClick={changeMode}>
        <i className="fa fa-retweet"></i>
      </Button>
    </Container>
  );
};

export { QrScanner };
