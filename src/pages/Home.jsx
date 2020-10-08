import React from "react";
import HeroImage from "components/HeroImage";
import CategoryList from "components/CategoryList";
import EventList from "components/EventList";
import Section from "layout/Section";
import PageContainer from "layout/PageContainer";
import styled from "styled-components";

import learnMore from "images/button_learnmore.png";
import crowdVideo from "images/crowd_festival.mov";
import googlePlay from "images/app_googleplay.jpg";
import appStore from "images/app_appstore.jpg";
import mailingList from "images/mailinglist.png";

const HomeSection = styled.section`
  background: ${(props) => props.backgroundColor};
  margin: 0;
  padding-top: 84px;
  padding-bottom: 84px;
  text-align: center;
`;

const Home = () => {
  return (
    <PageContainer>
      <HeroImage page="home" />
      <Section>
        <CategoryList />
        <Section>
          <hr />
          <div>TRENDING</div>
        </Section>
        <EventList />
      </Section>
      <HomeSection backgroundColor="lightGrey">
        <video width="480" height="320" controls>
          <source src={crowdVideo} type="video/mp4"></source>
        </video>
        <br />
        <img src={learnMore} width="120px" />
      </HomeSection>
      <HomeSection backgroundColor="grey">
        <Section>
          <img src={appStore} width="180px" />
          <img src={googlePlay} width="180px" />
        </Section>
          <img src={mailingList} width="600px" />
        <Section>
          <p>Powered by VENMO</p>
        </Section>
      </HomeSection>
    </PageContainer>
  );
};

export default Home;
