import React from "react";
import Info from "../components/info";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Grid from "@material-ui/core/Grid";

const infoSections = [
  {
    heading: "Types of Vehicles",
    description: "There are four types of vehicles",
    list: [
      "ICE: Internal Combustion Engine Vehicle",
      "HEV: Hybrid Electric Vehicle",
      "PHEV: Plugin Hybrid Electric Vehicle",
      "EV: Electric Vehicle",
    ],
  },

  {
    heading: "ICE vs EV",
    description: "There are four types of vehicles",
    list: [
      "ICE has about 50 times more moving parts than EVs",
      "ICE has high torque in specific RPM range only. EV doesn't have this problem. So gear box in EV is very simple.",
      "ICE has 25% power transfer efficiency whereas EV has 80-90%.",
    ],
  },

  {
    heading: "Assembly of EV",
    description:
      "EV has fewer components compared to ICE. These components can be placed anywhere in the vehicle, making assembly more flexible as compared to ICE. The only thing to make sure is the stability of the vehicle.",
  },
];

const AboutEVPage = () => (
  <Layout>
    <Seo title="About Electric Vehicles" />
    <Grid container spacing={3} justify="center">
      {infoSections.map((info) => (
        <Info
          heading={info.heading}
          description={info.description}
          list={info.list}
        ></Info>
      ))}
    </Grid>
  </Layout>
);

export default AboutEVPage;
