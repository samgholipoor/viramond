import React from "react";
import {
  QrContainer,
  QrHolder,
  Title,
  IconContainer,
  QrResultHolder,
  QrResultTitle,
  QrResult,
  TitleContainer,
  ExitIcon,
} from "./QrSelector.styles";

const QrSelector = ({ qrResult, setToggle, setQrResult }) => {
  return (
    <>
      <QrContainer onClick={() => setToggle(true)}>
        <QrHolder>
          <Title>Qr Code اسکن جیتا کد و </Title>
          <IconContainer>
            <i className="fa fa-qrcode"></i>
          </IconContainer>
          <Title>اسکن کنید</Title>
        </QrHolder>
      </QrContainer>
      {qrResult && (
        <QrResultHolder>
          <TitleContainer>
            <ExitIcon onClick={() => setQrResult("")}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </ExitIcon>
            <QrResultTitle>: نتیجه اسکن</QrResultTitle>
          </TitleContainer>
          <QrResult>{qrResult}</QrResult>
        </QrResultHolder>
      )}
    </>
  );
};

export { QrSelector };
