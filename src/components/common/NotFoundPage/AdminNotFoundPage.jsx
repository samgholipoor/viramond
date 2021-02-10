import React from "react";
import {
  AdminNotFoundContainer,
  ImageContainer,
  Director,
  DirectorContainer,
} from "./NotFoundPage.styles.jsx";

const AdminNotFoundPage = () => {
  return (
    <AdminNotFoundContainer>
      <ImageContainer src="/images/not-found.jpg" />

      <DirectorContainer>
        <Director to="/dashboard">
          <i className="fa fa-caret-left"></i>
          <span> بازگشت به پنل ادمین </span>
        </Director>
      </DirectorContainer>
    </AdminNotFoundContainer>
  );
};

export { AdminNotFoundPage };
