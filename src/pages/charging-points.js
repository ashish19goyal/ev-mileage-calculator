import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import GridFaq from "../components/grid-faq";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const questions = [
  {
    question: "Can I charge my EV at home",
    answer: "Yes, two types of power supplies are available at Indian homes",
    list: [
      "5A power line, resulting in 5A*220V = 1.1 KW power",
      "15A power line, resulting in 15A*220V = 3.3 KW power",
    ],
  },
  {
    question: "What are fast chargers?",
    answer:
      "Fast chargers are usually DC chargers. These can supply very high power to charge your EV batteryvery quickly.",
  },
  {
    question: "Do EVs have different types of chargers?",
    answer:
      "There are multiple standards for chargin connectors and charging points being used by different nations. Chinese standards are optimized for Indian conditions as well. However, India want to go with its own standards to avoid dumping by chinese companies. India is calling its standard as Bharat EV chargers.",
  },
  {
    question:
      "Do I need to get a separate electricity connection or approval at my home for charging EVs?",
    answer:
      "Yes, charging infrastrucutre can put a lot of load on the elecricity distribution. Thus, you need to get a dedicated connection from your electricity provider.",
  },
  {
    question: "Are EVs going to lead to electricity shortage for home use?",
    answer:
      "No, distribution of energy is a bottleneck in India. Power generation capacity is not the bottleneck. There is no shortage of electricity now.",
  },
  {
    question: "Why do I need a dedicated electricity connection for EVs?",
    answer:
      "Electricity distribution companies face challenges with supply because of",
    list: [
      "high usage load in a concentrated area",
      "high usage load at the same time of the day",
    ],
  },
  {
    question:
      "What kind of charging is suitable for different types of vehicles?",
    answer: "Charing for different vehicle types",
    list: [
      "Buses: Have a 200 kWh battery. Such a huge battery can only be charged in reasonble time using a DC fast charger at a bus depot",
      "Cars: Have a 40-50 kwh battery. It can be charged at a fast charging point in an hour or at home overnight.",
      "Auto and E-rickshaws: Have a 5-7 kwh battery. It can be charged overnight with a home charger.",
      "Bikes: Have a 1-2 kwh battery. Can be easily charged at home in a couple of hours.",
    ],
  },
];

const ChargingPoints = () => {
  let serial = 0;
  return (
    <Layout>
      <Seo title="Charing Points" />
      <Grid container>
        <Grid item xs={12}>
          <h2>Charing Points</h2>
        </Grid>
        <Grid item xs={12}>
          <p>All you want to know about charging points</p>
        </Grid>
      </Grid>
      <Divider />
      {questions.map((question, i) => {
        serial++;
        return <GridFaq key={i} serial={serial} {...question} />;
      })}
    </Layout>
  );
};

export default ChargingPoints;
