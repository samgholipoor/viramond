import React from "react";
import { Container, Title } from "./IconButton.styles";

const IconButton = ({ color, label, icon, path, SelectedIcon }) => {
  return (
    <Container color={color} to={path} onClick={SelectedIcon}>
      <i className={icon}></i>
      <Title> {label} </Title>
    </Container>
  );
};

export { IconButton };
