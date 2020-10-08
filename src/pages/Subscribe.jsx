import React from "react";
import PageContainer from "layout/PageContainer";
import Background from "components/Background";
import { Card, Form, Checkbox } from "semantic-ui-react";
import styled from "styled-components";
import signUp from "images/button_signup.png";
import theme from 'styles/theme'

const StyledCard = styled.div`
  position: absolute;
  width: 70%;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  /* text-shadow: 1px 1px black; */
  padding: 0 13.5%;
  opacity: 80%;
`;

const StyledTitle = styled.h1`
  font-family: ${theme.fonts.Rotis};
  font-style: normal;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  opacity: 100%
`;

const Subscribe = () => {
  return (
    <PageContainer>
      <Background />
      <StyledCard>
      <StyledTitle>Subscribe</StyledTitle>
        <Card centered fluid>
          <Card.Content>
            <Form>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder="Last Name" />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input placeholder="Username" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="Password" />
              </Form.Field>
              <Form.Field>
                <label>Repeat Password</label>
                <input placeholder="Repeat Password" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms of Use and Privacy Policy"></Checkbox>
              </Form.Field>
              <img src={signUp} width="100px" />
            </Form>
          </Card.Content>
        </Card>
      </StyledCard>
    </PageContainer>
  );
};

export default Subscribe;
