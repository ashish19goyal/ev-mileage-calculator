import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import GridFaq from "../components/grid-faq";

const questions = [
  {
    question: "What is EV?",
    answer:
      "EV stands for Electric Vehicle. It may refer to Electric Cars, Two Wheelers, Three Wheelers, Buses and Trucks",
  },
  {
    question: "What are ICE vehicles?",
    answer:
      "ICE stands for Internal Combustion Engine. Vehicles running on fossil fuels (petrol and diesel) belong to this category.",
  },
  {
    question: "Are there any other types of vehicles?",
    answer:
      "Yes, all vehicles of the day can be categorised into one of the following categories",
    list: [
      "ICE: Internal Combustion Engine Vehicle",
      "HEV: Hybrid Electric Vehicle",
      "PHEV: Plugin Hybrid Electric Vehicle",
      "EV: Electric Vehicle",
    ],
  },
  {
    question: "How are EVs different from ICE vehicles?",
    answer:
      "Primary difference between EV and ICE vehicles is the source of energy. ICE vehicles use fossil fuels whereas EV uses batteries. There are other notable differences such as -",
    list: [
      "ICE vehicles have about 50 times more moving parts than EVs",
      "ICE vehicles have high torque in specific RPM range only. EVs don't have this problem. So gear box in EVs is very simple.",
      "ICE vehicles have 25% power transfer efficiency whereas EVs has 80-90%.",
    ],
  },
  {
    question: "Does EV work differently from ICE vehicles?",
    answer:
      "The mechanics of working of EV are almost the same as those of ICE vehicles. Notably, EVs have fewer sub systems and components as compared to ICE vehicle, making their maintenance cheaper.",
  },
  {
    question: "Can I convert my ICE vehicle to EV?",
    answer:
      "Theoretically this is doable. However, financial considerations do not favour converting existing ICE vehicle to EV. It will be financially prudent to opt for your next vehicle to be an EV rather than converting your existing vechile.",
  },
];

const AboutEVPage = () => {
  let serial = 0;
  return (
    <Layout>
      <Seo title="About Electric Vehicles" />
      {questions.map((question) => {
        serial++;
        return <GridFaq serial={serial} {...question} />;
      })}
    </Layout>
  );
};

export default AboutEVPage;
