import React from "react";
import theme from "styles/theme";
import styled from "styled-components";
import concert from "images/hero_concert.jpg";
import football from "images/hero_football.jpg";
import searchbar from "images/searchbar.png";

const StyledImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  height: calc(60vh - 40px);
`;

const StyledImageText = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  /* text-shadow: 1px 1px black; */
  padding: 0 13.5%;
`;

const StyledTitle = styled.h1`
  font-family: ${theme.fonts.Rotis};
  font-style: normal;
  font-weight: bold;
`;

const StyledSearchbar = styled.img`
  width: 40%;
  object-fit: cover;
`;

const HeroImage = (props) => {
  let page, title;
  if (props.page === "sports") {
    page = football;
    title = "NBA";
  } else if (props.page === "home") {
    page = concert;
    title = "Magnanimus Tour";
  }
  return (
    <>
      <StyledImage src={page} alt={title}/>
      <StyledImageText>
        <StyledTitle>{title}</StyledTitle>
        <StyledSearchbar src={searchbar} alt="Search Bar" />
      </StyledImageText>
    </>
  );
};

export default HeroImage;
