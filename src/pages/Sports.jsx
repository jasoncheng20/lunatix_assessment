import React, { useState, useEffect } from "react";
import HeroImage from "components/HeroImage";
import Section from "layout/Section";
import byGame from "images/by_game.png";
import byTeam from "images/by_team.png";
import { Grid, Placeholder } from "semantic-ui-react";
import distanceSlider from "images/distance.png";
import PageContainer from "layout/PageContainer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

var settings = {
  async: true,
  crossDomain: true,
  url: "https://free-nba.p.rapidapi.com/teams?page=0",
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
    "x-rapidapi-key": "e5d8563997mshcfb030c802400d3p1ec262jsn6864acf2d34a",
  },
};

const Sports = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(settings.url, {
      method: settings.method,
      headers: settings.headers,
    })
      .then((response) => response.json())
      .then(function (json) {
        json.data.map(
          (team) =>
            (team.price = `from $${Math.floor(Math.random() * 40) + 80}`)
        );
        return json;
      })
      .then((response) => {
        setTeams(response.data);
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const columns = [
    { dataField: "full_name", text: "Team", sort: "true" },
    { dataField: "division", text: "Division", sort: "true" },
    {
      dataField: "price",
      text: "Ticket Price",
      sort: "true",
      sortFunc: (a, b, order) => {
        let p1 = a.substring(6);
        let p2 = b.substring(6);
        if (order === "asc") {
          return p2 - p1;
        }
        return p1 - p2; // desc
      },
    },
  ];

  const pagination = paginationFactory({
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "All",
        value: 30,
      },
    ],
  });

  return (
    <PageContainer>
      <HeroImage page="sports" />
      <Section>
        <Grid columns={3}>
          <Grid.Column width={7}>
            <img src={byTeam} width="150px" />
            <img src={byGame} width="150px" />
          </Grid.Column>
          <Grid.Column width={9}>
            <img src={distanceSlider} width="300px" />
          </Grid.Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Grid.Column width={13}>
            <BootstrapTable
              keyField="name"
              data={teams}
              columns={columns}
              pagination={pagination}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Placeholder style={{ height: '100%'}}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default Sports;
