import React from "react";
import { Segment, Icon } from "semantic-ui-react";

const style = {
  footerContainer: {
    margin: "0",
    padding: "3em 0em",
    width: "100%",
    backgroundColor: "black",
  },
  footerContentSection: {
    fontFamily: "Rotis",
    fontSize: "14px",
    lineHeight: "24px",
    color: "white",
    textAlign: "center",
  },
};

const Footer = () => {
  return (
    <Segment vertical style={style.footerContainer}>
      <p style={style.footerContentSection}>
        About | Support | Terms & Conditions
        <br />
        Copyright © 2020 SI Tickets | All Rights Reserved
        <br/>
        <br/>
        <Icon name="facebook f" inverted circular />
        <Icon name="twitter" inverted circular />
        <Icon name="instagram" inverted circular />
      </p>
    </Segment>
  );
};

export default Footer;
