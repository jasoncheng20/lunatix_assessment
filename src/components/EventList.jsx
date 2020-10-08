import React from "react";
import event from "images/event.png";
import styled from "styled-components";
import FlexContainer from "layout/FlexContainer";

const StyledImage = styled.img`
  width: 20%;
  padding: 10px;
`;

const EventList = () => {
  return (
    <FlexContainer>
      <StyledImage src={event} />
      <StyledImage src={event} />
      <StyledImage src={event} />
      <StyledImage src={event} />
    </FlexContainer>
  );
};

export default EventList;
