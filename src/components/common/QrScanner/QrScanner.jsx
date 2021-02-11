import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { toast } from "react-toastify";

const QrScanner = ({ setValue, setToggle }) => {
  const [cameraMode, setCamerMode] = useState("environment");

  const handleScan = (data) => {
    setValue(data?.text);
    data && setToggle(false);
  };

  const handleError = (err) => {
    setToggle(false);
    toast.error("سترسی به دوربین دستگاه شما مسدود است ، لطفا فعال کنید");
  };

  const handleLoad = (err) => {
    console.log(err);
  };

  const changeMode = () => {
    cameraMode === "environment"
      ? setCamerMode("user")
      : setCamerMode("reaenvironmentr");
  };

  return (
    <>
      <QrReader
        delay={100}
        style={{
          height: "inherit",
          width: "inherit",
          borderRadius: "8px",
        }}
        onError={handleError}
        onScan={handleScan}
        onLoad={handleLoad}
        // legacyMode={true}
        facingmode={cameraMode}
      />
      <span onClick={() => changeMode}> چرخش دوربین</span>
    </>
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
