import React from "react";
import {
  QrContainer,
  QrHolder,
  Title,
  IconContainer,
  QrResultHolder,
  QrResultTitle,
  QrResult,
} from "./QrSelector.styles";

const QrSelector = ({ qrResult, setToggle }) => {
  return (
    <>
      <QrContainer onClick={() => setToggle(true)}>
        <QrHolder>
          <Title>Qr Code اسکن جیتا کد و </Title>
          <IconContainer>
            <i class="fa fa-qrcode"></i>
          </IconContainer>
          <Title>اسکن کنید</Title>
        </QrHolder>
      </QrContainer>
      {qrResult && (
        <QrResultHolder>
          <QrResultTitle>: نتیجه اسکن</QrResultTitle>
          <QrResult>{qrResult}</QrResult>
        </QrResultHolder>
      )}
    </>
  );
};

export { QrSelector };
