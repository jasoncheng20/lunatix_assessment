import React from "react";
import category from "images/category.png";
import styled from "styled-components";
import FlexContainer from "layout/FlexContainer";

const StyledImage = styled.img`
  width: 15%;
  padding: 10px;
`;

const CategoryList = () => {
  return (
    <FlexContainer>
      <StyledImage src={category} />
      <StyledImage src={category} />
      <StyledImage src={category} />
      <StyledImage src={category} />
      <StyledImage src={category} />
      <StyledImage src={category} />
    </FlexContainer>
  );
};

export default CategoryList;
