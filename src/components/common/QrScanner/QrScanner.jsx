import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { toast } from "react-toastify";
import { MiniSpinnerMiniPage } from "../Spinner/miniSpinner-minipage";
import { Button, QrReaderContainer, Container } from "./QrScanner.styles";

const QrScanner = ({ setValue, setToggle }) => {
  const [cameraMode, setCamerMode] = useState("environment");
  const [isLoading, setIsLoading] = useState(true);

  const handleScan = (data) => {
    setValue(data?.text);
    data && setToggle(false);
  };

  const handleError = () => {
    setToggle(false);
    toast.error("سترسی به دوربین دستگاه شما مسدود است ، لطفا فعال کنید");
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const changeMode = () => {
    cameraMode === "environment"
      ? setCamerMode("user")
      : setCamerMode("reaenvironmentr");
  };

  return (
    <Container>
      <QrReaderContainer>
        {isLoading && <MiniSpinnerMiniPage />}
        <QrReader
          delay={100}
          style={{
            height: "100%",
            width: "100%",
          }}
          onError={handleError}
          onScan={handleScan}
          onLoad={handleLoad}
          facingmode={cameraMode}
        />
      </QrReaderContainer>
      {!isLoading && (
        <Button onClick={() => changeMode()}>
          <i class="fa fa-retweet"></i>
        </Button>
      )}
    </Container>
  );
};

export { QrScanner };

// const handleToggle = () => {
//   navigator.permissions
//     .query({ name: "camera" })
//     .then((permissionObj) => {
//       if (permissionObj.state === "granted") {
//         setToggle(true);
//       } else if (permissionObj.state === "denied") {
//         toast.error("سترسی به دوربین دستگاه شما مسدود است ، لطفا فعال کنید");
//         navigator.mediaDevices
//           .getUserMedia({ video: true })
//           .then((e) => console.log(e));
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
