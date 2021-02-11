import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const QrScanner = ({ setValue, setToggle }) => {
  const [cameraMode, setCamerMode] = useState("rear");

  const handleScan = (data) => {
    setValue(data?.text);
    data && setToggle(false);
  };

  const handleError = (err) => {
    setValue(err);
    console.log(err);
  };

  const handleLoad = (err) => {
    console.log(err);
  };

  const changeMode = () => {
    cameraMode === "rear" ? setCamerMode("front") : setCamerMode("rear");
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
        facingMode={cameraMode}
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
