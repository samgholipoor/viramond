import React from "react";
import { Container, Menu, Title, Exit } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Menu>
        <i className="fas fa-bars"></i>
      </Menu>
      <Title>جیتالوگ</Title>
      <Exit>
        <i className="fas fa-sign-out-alt"></i>
      </Exit>
    </Container>
  );
};

export { Header };
