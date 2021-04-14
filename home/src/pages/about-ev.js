import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutEVPage = () => (
  <Layout>
    <Seo title="About Electric Vehicles" />

    <h4>Types of Vehicles</h4>
    <p>There are four types of vehicles</p>
    <ol>
      <li>ICE: Internal Combustion Engine Vehicle</li>
      <li>HEV: Hybrid Electric Vehicle</li>
      <li>PHEV: Plugin Hybrid Electric Vehicle</li>
      <li>EV: Electric Vehicle</li>
    </ol>

    <h4>ICE vs EV</h4>
    <ul>
      <li>ICE has about 50 times more moving parts than EVs</li>
      <li>
        ICE has high torque in specific RPM range only. EV doesn't have this
        problem. So gear box in EV is very simple.
      </li>
      <li>ICE has 25% power transfer efficiency whereas EV has 80-90%.</li>
    </ul>

    <h4>Assembly of EV</h4>
    <p>
      EV has fewer components compared to ICE. These components can be placed
      anywhere in the vehicle, making assembly more flexible as compared to ICE.
      The only thing to make sure is the stability of the vehicle.
    </p>
  </Layout>
);

export default AboutEVPage;
