import React from "react";
import {
  Container,
  Holder,
  ImageContainer,
  ContextContainer,
  Title,
  Title2,
  Description,
} from "./LandingPage.styles";

const LandingPageComponent = () => {
  return (
    <Container>
      <Holder>
        <ImageContainer>
          <img src="/images/landingpage.png" alt="landingpage" />
        </ImageContainer>
        <ContextContainer>
          <Title>مارکت پلیس</Title>
          <Title2>هر هفته بیش از یک میلیون نفر از ترب استفاده میکنند</Title2>
          <Description>
            محصولات خود را بین میلیون‌ها محصول و در کنار هزاران فروشگاه اینترنتی
            در معرض دید خریداران قرار دهید.
          </Description>
        </ContextContainer>
      </Holder>
    </Container>
  );
};

export { LandingPageComponent };
