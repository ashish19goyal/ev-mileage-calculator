import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Faq from "../components/faq";

const questions = [
  {
    question: "What is EV?",
    answer:
      "EV stands for Electric Vehicle. It may refer to Electric Cars, Two Wheelers, Three Wheelers, Buses and Trucks",
  },
  {
    question: "What is ICE?",
    answer:
      "ICE stands for Internal Combustion Engine. All the vehicles other than EV are ICE vehicles.",
  },
];

const FaqPage = () => {
  let serial = 0;
  return (
    <Layout>
      <Seo title="Electric Vehicle FAQs" />
      {questions.map((question) => {
        serial++;
        return (
          <Faq
            serial={serial}
            question={question.question}
            answer={question.answer}
          />
        );
      })}
    </Layout>
  );
};

export default FaqPage;
