import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ChargingPoints = () => (
  <Layout>
    <Seo title="Electric Vehicle Batteries" />
    <h4>Home Charging</h4>
    <ul>
      <li>A small Indian house uses ~2KWh per day</li>
      <li>
        Power supplies at home in India are
        <ul>
          <li>5A resulting in 5A*220V = 1.1 KW</li>
          <li>15A resulting in 15A*220V = 3.3 KW</li>
        </ul>
      </li>
    </ul>
    <h4>Fast Chargers</h4>
    <p>Fast chargers are usually DC chargers</p>

    <h4>Charging standards</h4>
    <ul>
      <li>
        There are multiple standards for charging points being used by different
        nations
      </li>
      <li>
        Chinese standards are optimized for Indian conditions as well. However,
        India want to go with its own standards to avoid dumping by chinese
        companies.
      </li>
      <li>India is calling its standard as Bharat EV charges</li>
    </ul>

    <h4>Charing for different vehicle types</h4>
    <ul>
      <li>
        Buses
        <ul>
          <li>Have a 200KWh battery.</li>
          <li>
            Such a huge battery can only be charged in reasonble time using a DC
            charger at a bus depot
          </li>
        </ul>
      </li>

      <li>
        2 wheelers
        <ul>
          <li>Have a 1-2 KWh battery </li>
          <li>Can be easily charged with a home charger in a few hours</li>
        </ul>
      </li>
      <li>
        3 wheelers
        <ul>
          <li>Have a 3-5 KWh battery </li>
          <li>can be charged overnight by a home charger</li>
        </ul>
      </li>
    </ul>

    <h4>Load Management</h4>
    <ul>
      <li>
        Charging infrastrucutre can put a lot of load on the elecricity
        distribution.
      </li>
      <li>Discoms need smart solutions to manage load.</li>
      <li>
        Distribution is a bottleneck. Power generation capacity is not the
        bottleneck.
      </li>
      <li>
        Challenges are in terms of
        <ul>
          <li>high usage load in a concentrated area</li>
          <li>high usage load at the same time of the day</li>
        </ul>
      </li>
    </ul>
  </Layout>
);

export default ChargingPoints;
