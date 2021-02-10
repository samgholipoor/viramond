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

      <DirectorContainer>
        <Director to="/">
          <i className="fa fa-caret-left"></i>
          <span> بازگشت به خانه </span>
        </Director>
      </DirectorContainer>
    </NotFoundContainer>
  );
};

export { NotFoundPage };
