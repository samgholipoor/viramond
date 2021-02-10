import React from "react";
import {
  NotFoundContainer,
  ImageContainer,
  Director,
  DirectorContainer,
} from "./NotFoundPage.styles.jsx";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ImageContainer src="/images/not-found.jpg" />
    </NotFoundContainer>
  );
};

export { NotFoundPage };
