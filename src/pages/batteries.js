import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import GridFaq from "../components/grid-faq";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const questions = [
  {
    question: "Why do we use batteries in electric vehicles?",
    answer:
      "Batteries provide an easy way of storing electric energy. This energy can be used in a controlled manner when required. Today batteries are used in a number of applications ranging from smartphones to space stations.",
  },
  {
    question: "How much does the batteries cost?",
    answer:
      "The cost of batteries in EVs is about 30-40% of the overall cost of the vehicle. With the available models in India, EV batteries would cost you",
    list: [
      "Rs 4-7 lakhs for cars",
      "Rs 50000 for 3 wheelers",
      "Rs 40-60 thousands for bikes and scooters",
    ],
  },
  {
    question: "What is the breakdown of the cost of the battery?",
    answer: "",
    list: [
      "Raw materials like Li, Ni, Co, Mn contributes to about 40% of the cost",
      "Cell assembly contributes about 25% to the cost",
      "Battery pack assembly contributes about 35% to the cost",
    ],
  },
  {
    question: "Are batteries safe to use in vehicles?",
    answer:
      "Batteries are being used in vehicles for a long time. Earlier they supported only auxillary functions like power windows, headlights etc. In EVs, these batteries replace fossil fuel as the primary source of energy. Batteries are already safer than the fossil fuels. This will further improve in future with better techology for battery management.",
  },
  {
    question: "Can EV batteries catch fire?",
    answer:
      "Yes, these batteries can catch fire. And these fires can be very dangerous as the batteries carry a lot of energy. Infact, a Tesla burnt for almost 4 hours after an accident due to the batteries catching fire.",
  },
  {
    question: "What are battery packs?",
    answer:
      "The energy requirement of automobiles is very high. To meet this requirement a complex array of batteries is used. These are structured as follows -",
    list: [
      "Cells : This is the smallest working unit of power generation. Usually these are li-ion cells",
      "Modules: Cells are combined into modules. The purpose of a module is to provide physical protection to underlying cells",
      "Packs: Modules are combined into packs. Each pack includes the battery management system (BMS). It also has coolant and cooling systems to ensure good performance for the batteries.",
    ],
  },
  {
    question: "How can I compare batteries available for use in EVs?",
    answer:
      "To compare the batteries, we can rely on the following efficiency parameters",
    list: [
      "Gravitation Energy Density : This is the amount of energy carried per unit wieght by the battery. Measured in Watts/Kg. The higher it is the better, as you would need to carry less dead weight of the battery for same vehicle range.",
      "Volumetric Energy Density: This is the amount of energy carried per unit volume of the battery. Measured in Watts/litre. The higher it is the better, as you would have to devote lesser space on vehicle to battery units.",
      "C-Rate: This is the rate of charge or discharge of battery. The higher it is the better, as your vehicle would be able to charge faster. Also, when higher power is required, it can deliver better pickup. It also depends on the temperature of the battery unit.",
      "Depth of discharge: It specifies the working range of the battery. e.g. a battery can be used effectively between 10% charged to 90% charged state only. The higher it is the better.",
    ],
  },
  {
    question: "Can EV batteries be recycled?",
    answer:
      "Theoretically 100% of the battery can be recycled. Recovered raw materials can then be used in manufacturing process. However, the recycling process is not yet commercially viable.",
  },
];

const BatteryPage = () => {
  let serial = 0;
  return (
    <Layout>
      <Seo title="About Batteries" questions={questions} />
      <Grid container>
        <Grid item xs={12}>
          <h2>About Batteries</h2>
        </Grid>
        <Grid item xs={12}>
          <p>Know about the batteries used in your electric vehicle.</p>
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
