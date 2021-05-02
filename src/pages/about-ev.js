import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import GridFaq from "../components/grid-faq";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const questions = [
  {
    question: "What are EVs?",
    answer:
      "EV stands for Electric Vehicle. These use electricity as the primary source of energy, compared to fossil fuels being used in the regular ICE (Internal Combustion Engine) vehicles. ",
  },
  {
    question: "How are EVs different?",
    answer:
      "Primary difference is the source of energy. ICE vehicles use fossil fuels whereas EV uses batteries. There are other notable differences such as -",
    list: [
      "EVs have about 50 times less moving parts. Meaning reduced vibrations and assembly. This means very smooth riding experience.",
      "EVs has a wide range of high torque and power output. Unlike ICE vehicles that high torque in specific RPM range only. This means EVs are naturally automatic transmission.",
      "EVs have a very high energy conversion efficiency of 90%, compared to about 25% efficiency of ICE vehicles. This means EVs can go 3-4 times the distance for the same amount of energy used.",
    ],
  },
  {
    question: "Do I feel any difference when driving an EV?",
    answer:
      "Yes, the differences are mostly pleasant. Particularly all the subsystems in EVs are electrical. Unlike in ICE vehicles, where a lot of things are still hydraulic. Electric systems are better automated and gives a better driving experience. Also, EVs naturally support automatic transmission. Unlike ICE where additional components were put in to make it automatic. So, you will not feel any lag in transmission when speeding up or down.",
  },
  {
    question: "What is the driving range of EVs?",
    answer:
      "The range of electric vehicles depend on the size of the battery. In 2021, the options available in India have ",
    list: [
      "Cars: 200-300 kms",
      "3 wheelers: 80-120 kms",
      "Bikes and scooters: 70-100 kms",
    ],
  },
  {
    question:
      "What if my EV's battery is out and I do not find a charging point?",
    answer:
      "This is a common concern among EV owners. Its called range anxiety. It used to be the same case in the early days of ICE vehicles too. However, with the ever increasing ecosystem of EVs, there will be ample infrastructure to charge your EV soon enough. Please note that setting up the charging infrastructure is much cheaper than setting up a petrol pump.",
  },
  {
    question: "What is the maintenance cost of EVs?",
    answer:
      "EVs have fewer sub systems and components as compared to ICE vehicle, making their maintenance much cheaper. However, there is a reccuring cost of battery replacement every 5 years or so.",
  },
  {
    question: "What is the typical battery life for EVs?",
    answer:
      "The life of the battery is measured in charging cycles. Today's comercially available technology allows about 1500 charging cycles before seriously deteriorated performance. This implies your battery would work for almost 5 years if you charge it once every day.",
  },
  {
    question:
      "Can my EV battery also support Air conditioning and other auxillary functions like lights?",
    answer:
      "Yes. Although your vehicle need convertors and controllers to make the different equipments work with the same battery. This is much better than ICE vehicles where there are dedicated battery for these functions.",
  },
  {
    question:
      "Does use of Air Conditioning have an impact on my vehicles range or mileage?",
    answer: "Yes. Use of AC costs you about 20% in range and mileage.",
  },
  {
    question: "How much range can I get with 1 hour of charging?",
    answer:
      "With fast charging, you can get almost 90% of the total range in 1 hour of charging. With home charging you can get 15-20% of overall range with 1 hour of charging.",
  },
  {
    question: "Does driving speed has any effect on my driving range?",
    answer:
      "Yes. The amount of energy used is proportional to the square of driving speed. This means you would be using four times the energy if dirving at double the speed, thereby reducing your driving range by more than half.",
  },
  {
    question: "What is the top speed that my EV can achieve?",
    answer:
      "Max speed depend upon the ratings of the motor used in the vehicles. Typically in India",
    list: [
      "Electric Cars have a top speed of 120-167 km/h",
      "3 wheelers have a top speed of 50-55 km/h",
      "Bikes and Scooters have a top speed of 60-80 km/h",
    ],
  },
  {
    question: "How good is the pickup for electric vehicles?",
    answer:
      "The pickup for electric vehicles is much better than ICE vehicles. Infact, you would feel a sudden throwback at the start of driving.",
  },
  {
    question:
      "EVs have chips and software. What if the chip burns out or software has a bug?",
    answer:
      "Automobile industry have very high quality standards, highest in the industry. EVs have redundancies built in to handle failures. Also, the sub systems are designed to operate independently in case of failures in adjoining components.",
  },
  {
    question: "Is EV more expensive than their ICE counterparts?",
    answer:
      "Yes, however the difference in cost is reduced by govt provided subsidies.",
  },
  {
    question:
      "If I buy a EV, I have to pay a lot of money upfront for batteries. With ICE vehicles, I get to pay as I use. Are they any solutions available for this to bring down the costs of EVs?",
    answer:
      "Yes. A lot of industry leaders are working on innovative solutions to bring down the upfront cost of EVs. One of the proposed solutions is to use a low capacity primary battery and the ability to top up with a high power secondary battery on demand. This will bring down the cost for our average EV owners.",
  },
  {
    question: "Are EVs suitable for hilly terrain?",
    answer:
      "Hilly terrains demand very good drive train ratings. It also consumes a lot of energy to go uphill. EVs in 2021 are not suitable to work in hilly terrains. They are more suitable for city commute.",
  },
  {
    question: "Can I convert my ICE vehicle to EV?",
    answer:
      "Theoretically this is feasible. However, financial considerations do not favour converting existing ICE vehicle to EV. It will be financially prudent to opt for your next vehicle to be an EV rather than converting your existing vechile.",
  },
];

const AboutEVPage = () => {
  let serial = 0;
  return (
    <Layout>
      <Seo title="About Electric Vehicles" questions={questions} />
      <Grid container>
        <Grid item xs={12}>
          <h2>About Electric Vehicle</h2>
        </Grid>
        <Grid item xs={12}>
          <p>
            Find the most frequently asked questions about electric vehicles
            here.
          </p>
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

export default AboutEVPage;
