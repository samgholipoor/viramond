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

  return (
    <QrReader
      delay={100}
      style={{
        height: 240,
        width: 320,
      }}
      onError={handleError}
      onScan={handleScan}
    />
  );
};

export { QrScanner };
