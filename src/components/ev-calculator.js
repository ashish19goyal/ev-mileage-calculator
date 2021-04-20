import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import EvsInMarket from "../ev-models/evs-in-market";
import EvSelect from "./form-elements/ev-select";
import EvText from "./form-elements/ev-text";
import EvInput from "./form-elements/ev-input";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const chargingStyles = [
  "Once a day charging at home",
  "Twice a day charged at home and office",
  "Multiple times a day charged at home/office",
  "Once a day Fast charger charging",
  "Multiple times a day fast charging",
];

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  grid: {
    paddingTop: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const EVCalculator = ({ type }) => {
  const classes = useStyles();

  // model details
  const [make, setMake] = React.useState("");
  const [modelList, setModelList] = React.useState([]);
  const [model, setModel] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [range, setRange] = React.useState(0);
  const [mileage, setMileage] = React.useState(0);

  // battery details
  const [batteryCapacity, setBatteryCapacity] = React.useState("");
  const [chargingCycles, setChargingCycles] = React.useState("");
  const [batteryPrice, setBatteryPrice] = React.useState("");
  const [cRate, setcRate] = React.useState("");
  const [dod, setDod] = React.useState("");
  const [runningCost, setRunningCost] = React.useState("");
  const [totalRunningCost, setTotalRunningCost] = React.useState("");

  // usage pattern
  const [dailyRun, setDailyRun] = React.useState(10);
  const [chargingStyle, setChargingStyle] = React.useState(
    "Once a day charging at home"
  );

  let makesList = [
    ...new Set(EvsInMarket[type].map((vehicle) => vehicle.make)),
  ];

  const handleChargingStyleChange = (event) => {
    setChargingStyle(event.target.value);
  };

  const handleMakeChange = (event) => {
    let m = event.target.value;
    setMake(m);
    let modelList = [
      ...new Set(
        EvsInMarket[type]
          .filter((vehicle) => vehicle.make === m)
          .map((vehicle) => vehicle.model)
      ),
    ];
    setModelList(modelList);
  };

  const handleModelChange = (event) => {
    let m = event.target.value;
    setModel(m);
    setModelInfo(m);
  };

  const handleDailyRunChange = (event) => {
    setDailyRun(event.target.value);
  };

  const setModelInfo = (m) => {
    let modelInfo = EvsInMarket[type].filter(
      (vehicle) => vehicle.make === make && vehicle.model === m
    );
    if (modelInfo.length === 1) {
      setDescription(modelInfo[0].description);
      setRange(modelInfo[0].range);
      setMileage(modelInfo[0].range);
      setBatteryPrice(modelInfo[0].battery.price);
      setBatteryCapacity(modelInfo[0].battery.capacity);
      setChargingCycles(modelInfo[0].battery.cycles);
      setcRate(modelInfo[0].battery.cRate);
      setDod(modelInfo[0].battery.dod);
    }
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Select a model</h4>
        </Grid>
        <EvSelect
          items={makesList}
          handleChange={handleMakeChange}
          label="EV Make"
          value={make}
          description="Name of the automaker/OEM"
        />
        <EvSelect
          items={modelList}
          handleChange={handleModelChange}
          label="EV Model"
          value={model}
          description="Mileage will be calculated for this model"
        />
        <EvText
          label="Description"
          value={description}
          description="Type of vehicle"
          multiline
        />
        <EvText
          label="Range"
          value={range + ""}
          description="Range of vehicle in Km"
        />
        <EvText
          label="Mileage"
          value={mileage + ""}
          description="Mileage of vehicle in Wh/Km"
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Battery Specifications</h4>
        </Grid>
        <EvText
          label="Battery Price"
          value={batteryPrice}
          description="One time cost of the battery"
        />
        <EvText
          label="Battery Capacity"
          value={batteryCapacity}
          description="Energy capacity of the battery in KWh"
        />
        <EvText
          label="C-Rate"
          value={cRate}
          description="Higher the better. Read FAQs for more information."
        />
        <EvText
          label="Depth of Discharge"
          value={dod}
          description="Higher the better. Read FAQs for more information."
        />
        <EvText
          label="Charging Cycles"
          value={chargingCycles}
          description="Life of battery in terms of charging cycles"
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Update based on your usage</h4>
        </Grid>

        <EvInput
          label="Daily run"
          value={dailyRun}
          description="Estimate of your daily commute in km"
          handleChange={handleDailyRunChange}
        />
        <EvSelect
          items={chargingStyles}
          value={chargingStyle}
          label="Your chargning style"
          description="How do you plan to charge your vehicle"
          handleChange={handleChargingStyleChange}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Cost estimates</h4>
        </Grid>
        <EvText
          label="Daily Running Cost"
          value={runningCost}
          description="In Rs/km"
        />
        <EvText
          label="Total Running Cost"
          value={totalRunningCost}
          description="Running and capital cost of battery (in Rs/km)"
        />
      </Paper>
    </div>
  );
};

EVCalculator.propTypes = {
  type: PropTypes.string.isRequired,
};

export default EVCalculator;
