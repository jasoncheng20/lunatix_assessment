import React from "react";
import styled from "styled-components";
import concert from "images/concert_full.jpg";

const BackgroundImg = styled.img`
  display: block;
  object-fit: cover;
  flex: 1 0 auto;
  width: 100%;
`;

const Background = () => {
  return <BackgroundImg src={concert} />;
};

export default Background;
