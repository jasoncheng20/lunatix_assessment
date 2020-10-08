import React from "react";
import PageContainer from "layout/PageContainer";
import Background from "components/Background";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import dropdown from "images/dropdown_2.png";
import trashcan from "images/trashcan.png";
import continueShopping from "images/button_continueshopping.png";
import checkoutButton from "images/button_checkout.png";

const StyledCard = styled.div`
  position: absolute;
  width: 60%;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  /* text-shadow: 1px 1px black; */
  padding: 0 13.5%;
  opacity: 80%;
`;

const Checkout = () => {
  return (
    <PageContainer>
      <Background />
      <StyledCard>
        <Card fluid>
          <Card.Content>
            <Card.Header textAlign="left">MY CART</Card.Header>
            <hr />
            <Card.Description textAlign="left">EVENT 1</Card.Description>
            <Card.Description textAlign="left">Venue<Card.Content textAlign="right">$1000</Card.Content></Card.Description>
            <Card.Description textAlign="left">Date</Card.Description>
            <Card.Description textAlign="left">
              <Image floated="right" size="mini" src={trashcan} />
              Quantity <img src={dropdown} width="50px" />
            </Card.Description>
            <hr />
            <Image size="small" src={continueShopping} />
            <Image size="tiny" src={checkoutButton} />
          </Card.Content>
        </Card>
      </StyledCard>
    </PageContainer>
  );
};

export default Checkout;
