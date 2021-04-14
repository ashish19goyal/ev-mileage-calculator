import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Batteries = () => (
  <Layout>
    <Seo title="Electric Vehicle Batteries" />
    <h4>History</h4>
    <p>
      Batteries started to be tested for transport in 2010. It has taken more
      than a decade to become commercialy viable for transport sector.
    </p>
    <h4>Battery Packs</h4>
    <ul>
      <li>
        Battery packs consist of modules. It has coolants. It has battery
        management system.
      </li>
      <li>
        Battery Modules consist of cells. It provides physical protection to
        cells
      </li>
      <li>Battery cells are the smallest working unit of power generation</li>
    </ul>
    <h4>Efficiency</h4>
    <ul>
      <li>
        Efficiency of batteries is measured in terms of
        <ul>
          <li>Gravitational Energy Density: W/kg </li>
          <li>Volumetric Energy Density: W/litre</li>
        </ul>
      </li>

      <li>
        Rate of charge or discharge, also called c-rate.
        <ul>
          <li>It denotes how fast a battery can be charged. </li>
          <li>
            This is independent of charger. Even with a fast charger, speed of
            charging is limited by batteries C-rate.
          </li>
          <li>It depends on temperature</li>
          <li>Li-ion has 1-2C rate 1C battery can fully charge in 1 hour </li>
          <li>0.5C battery can fully charge in 2 hours </li>
        </ul>
      </li>

      <li>
        Depth of discharge (DoD)
        <ul>
          <li>
            It signifies the working range of the battery. e.g. from 90% charge
            to 10% charge.
          </li>
        </ul>
      </li>

      <li>
        Form Factors
        <ul>
          <li>
            Cylindrical: Used by Tesla, Ola, Reva. Over-engineered for heat
            management
          </li>
          <li>
            Prismatic/Pouch: Standardized by multiple manufacturers Was
            initially used by Reva Polymer
          </li>
        </ul>
      </li>
    </ul>
  </Layout>
);

export default Batteries;
