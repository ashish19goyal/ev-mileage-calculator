import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Environment = () => (
  <Layout>
    <Seo title="How is EV different?" />
    <h4>User Experience</h4>
    <p>
      The ICE vehicle development started in the early 20th century. At the
      time, mostly hydraulics were used to manage all the vehicle sub systems,
      including steering, cooling, breaking etc. Slowly, these systems have been
      converted to electric systems. However, acceleration and transmission (at
      least in India market) are still manual.
    </p>
    <p>
      With EV we have to rethink acceleration and transmission. Users only have
      to understand speed. Internal softwares can do the calculations and derive
      the current throughput to achive that speed. Also, unlike ICE that are
      tuned for max power output at specific RPMs, Batteries have a wider range
      of high power output. This implies, we do not need a multi-gear
      transmission system. These considerations will change the drive experience
      a lot. Imagine turning a knob to set the desired vehicle speed and
      relaxing as the vehicle auto adjusts its parameters to meet you wishes.
    </p>
  </Layout>
);

export default Environment;
