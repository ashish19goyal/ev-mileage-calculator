import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import GridFaq from "../components/grid-faq";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const questions = [
  {
    question: "How are EVs environment friendly?",
    answer: "EVs are environment frinedly in a number of ways as listed below ",
    list: [
      "EVs have a energy efficeincy of 80-90% as compared to 25% efficiency of ICe vehicles. This means EVs used only a 3rd of energy used by ICE vehicles.",
      "It is very difficult to manage effluents from ICE vehicles as they are spread out on the roads. However, EVs are powered by electricity generated at Mega power plants, where effluents can be handled with much more ease.",
      "Evs can also be powered by clean energy generated from solar and wind",
    ],
  },
  {
    question:
      "How can EVs help in electricity generation, storage and distribution?",
    answer:
      "With the increasing role of renewable in the overall electricity basket, power usage pattern has to be managed. Thermal and nuclear power generation have very low variance during a 24 hour cycle, whereas renewable power generation has very high variance. EVs can be used as storage batteries to store energy during times of high availability during the day, and use during the non-sun hours.",
  },
  {
    question: "EVs use rare minerals. Isn't it going to run out?",
    answer:
      "Some rare metals like Li, Ni and Co are used in the manufacturing of batteries for EV. Though these constitute only a small percentage of of battery, they are essential. These minerals can be extracted from old batteries and reused.",
  },
  {
    question:
      "Are there any geo-political constraints on the availability of these minerals?",
    answer:
      "Yes, about 85% of the reserves of Li are owned by China and the remaining reserves are owned by big corporates like Tesla",
  },
];

const Environment = () => {
  let serial = 0;
  return (
    <Layout>
      <Seo title="Impact of EVs on Environment" />
      <Grid container>
        <Grid item xs={12}>
          <h2>Impact of EVs on Environment</h2>
        </Grid>
        <Grid item xs={12}>
          <p>EVs can have a positive effect on our environment</p>
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

export default Environment;
