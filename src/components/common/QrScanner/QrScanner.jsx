import React from "react";
import QrReader from "react-qr-scanner";

const QrScanner = ({ setValue, setToggle }) => {
  const handleScan = (data) => {
    setValue(data?.text);
    data && setToggle(false);
  };

  const handleError = (err) => {
    setValue(err);
  };

  const handleLoad = (err) => {
    console.log(err);
  };

  return (
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
    />
  );
};

export { QrScanner };
