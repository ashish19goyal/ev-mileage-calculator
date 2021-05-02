import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import GridFaq from "../components/grid-faq";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const questions = [
  {
    question: "Can I swap batteries in my EV?",
    answer:
      "Yes, you can swap the batteries in your EV. This is a good alternative to charging. One can swap a discharged battery with a completely charged one in minutes. As compared to hours taken to charge it.",
  },
  {
    question:
      "What are the benfits of battery swapping as compared to charging?",
    answer:
      "Battery swapping is much more advantageous in Indian conditions, due to following reasons",
    list: [
      "Battery Swapping takes only a few minutes, whereas charging takes hours",
      "With swapping batteries can be charged with slow chargers. This is beneficial for the life of the battery",
      "Battery swapping stations can charge the battery in air conditioned environment. This is beneficial for the life of the battery",
      "Fast charging batteries are more expensive as compared to slow charging batteries. Swapping can take away the need to have fast charging batteries",
    ],
  },
  {
    question:
      "What if my good battery gets swapped with a underperforming battery?",
    answer:
      "You can opt for battery managing services from a third party. In that case, you do not own the battery. You do not have to worry about the goodness of the battery. You only pay for the use of the battery",
  },
  {
    question: "Can I charge a swapped battery like my regular battery?",
    answer:
      "Yes, the battery can be charged at swapping station or inside your vehicle. However, the battery is locked to be charged anywhere else.",
  },
];

const BatteryPage = () => {
  let serial = 0;
  return (
    <Layout>
      <Seo title="Battery Swapping" questions={questions} />
      <Grid container>
        <Grid item xs={12}>
          <h2>Battery Swapping</h2>
        </Grid>
        <Grid item xs={12}>
          <p>Battery Swapping as an alternative to fast charging.</p>
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

export default BatteryPage;
