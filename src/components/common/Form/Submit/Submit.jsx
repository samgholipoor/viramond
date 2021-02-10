import React from "react";

import { ButtonContainer } from "./Submit.styles";

const Button = (props) => {
  const {
    children,
    bigsize,
    border,
    background,
    color,
    click,
    id,
    icon,
  } = props;

  return (
    <ButtonContainer
      bigsize={bigsize}
      color={color}
      background={background}
      border={border}
      onClick={click}
      id={id}
    >
      {icon && <i className={icon}></i>}
      {children}
    </ButtonContainer>
  );
};

export { Button };
