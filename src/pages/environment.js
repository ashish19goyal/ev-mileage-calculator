import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Environment = () => (
  <Layout>
    <Seo title="Electric Vehicle Environment Impact" />
    <h4>Electricity generation and storage</h4>
    <ul>
      <li>
        With the increasing role of renewable in the overall electricity basket,
        power usage pattern has to be managed
      </li>
      <li>
        Thermal power generation has very low variance during a 24 hour cycle.
      </li>
      <li>
        Renewable power generation has very high variance during a 24 hour
        cycle.
      </li>
      <li>
        EV can be used as storage batteries to store energy during the day, and
        use during the non-sum hours. This idea of feeding energy back to grid
        from EV batteries is known as Vehicle to Grid
      </li>
    </ul>
    <h4>Tackling pollution</h4>
    <ul>
      <li>
        Pollution from tail pipe is distibuted, whereas from a thermal power
        plant is centrallised
      </li>
      <li>Centrallised polution is easier to manage and mitigate</li>
    </ul>

    <h4>Minerals</h4>
    <p>
      Some rare metals like Li, Ni and Co are used in the manufacturing of
      batteries for EV. Though these constitute only a small percentage of of
      battery, they are essential. About 85% of the reserves of Li are owned by
      China and the remaining reserves are owned by Tesla
    </p>
  </Layout>
);

export default Environment;
