import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import EvsInMarket from "../ev-models/evs-in-market";
import EvSelect from "./form-elements/ev-select";
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
  const [modelInfo, setModelInfo] = React.useState({ battery: {} });

  // battery details
  const [runningCost, setRunningCost] = React.useState("");
  const [totalRunningCost, setTotalRunningCost] = React.useState("");

  // rates
  const [interestRate, setInterestRate] = React.useState(10);
  const [electricityCharges, setElectricityCharges] = React.useState(10);

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
    calculateCost({ modelInfo, electricityCharges, interestRate });
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
    getModelInfo(m);
  };

  const handleDailyRunChange = (event) => {
    setDailyRun(event.target.value);
    calculateCost({ modelInfo, electricityCharges, interestRate });
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
    calculateCost({
      modelInfo,
      electricityCharges,
      interestRate: event.target.value,
    });
  };

  const handleElectricityChargesChange = (event) => {
    setElectricityCharges(event.target.value);
    calculateCost({ modelInfo, electricityCharges: event.target.value });
  };

  const getModelInfo = (m) => {
    let modelInfo = EvsInMarket[type].filter(
      (vehicle) => vehicle.make === make && vehicle.model === m
    );
    if (modelInfo.length === 1) {
      setModelInfo(modelInfo[0]);
      calculateCost({
        modelInfo: modelInfo[0],
        electricityCharges,
        interestRate,
      });
    }
  };

  const calculateCost = ({ modelInfo, electricityCharges, interestRate }) => {
    if (electricityCharges != null) {
      let runningCostValue = (
        (modelInfo.mileage * electricityCharges) /
        1000
      ).toFixed(2);
      setRunningCost(runningCostValue);
    }

    let priceIncludingInterest =
      (interestRate * modelInfo.battery.price * modelInfo.battery.cycles) /
        1.55 /
        365 /
        100 +
      modelInfo.battery.price;
    console.log("priceIncludingInterest " + priceIncludingInterest);
    let totalKms =
      (modelInfo.battery.cycles *
        modelInfo.battery.capacity *
        1000 *
        modelInfo.battery.dod) /
      modelInfo.mileage;
    let totalRunningCostValue = (
      (modelInfo.mileage * electricityCharges) / 1000 +
      priceIncludingInterest / totalKms
    ).toFixed(2);
    setTotalRunningCost(totalRunningCostValue);
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
          description="Costs will be calculated for this model"
        />
        <EvInput
          label="Description"
          value={modelInfo.description}
          description="Type of vehicle"
          multiline
          readonly
        />
        <EvInput
          label="Range"
          value={modelInfo.range}
          description="Range of vehicle"
          endUnit="km"
          readonly
        />
        <EvInput
          label="Mileage"
          value={modelInfo.mileage}
          description="Mileage of vehicle"
          endUnit="Wh/km"
          readonly
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Battery Specifications</h4>
        </Grid>
        <EvInput
          label="Battery Price"
          value={modelInfo.battery.price}
          description="Cost of changing the battery"
          startUnit="Rs"
          readonly
        />
        <EvInput
          label="Battery Capacity"
          value={modelInfo.battery.capacity}
          description="Energy capacity of the battery"
          endUnit="kwh"
          readonly
        />
        <EvInput
          label="C-Rate"
          value={modelInfo.battery.cRate}
          description="Higher the better. Read FAQs for more information."
          readonly
        />
        <EvInput
          label="Depth of Discharge"
          value={modelInfo.battery.dod}
          description="Higher the better. Read FAQs for more information."
          readonly
        />
        <EvInput
          label="Charging Cycles"
          value={modelInfo.battery.cycles}
          description="Life of battery in terms of charging cycles"
          readonly
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Update based on your usage</h4>
        </Grid>

        <EvInput
          label="Daily run"
          value={dailyRun}
          description="Estimate of your daily commute"
          handleChange={handleDailyRunChange}
          endUnit="km"
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
          <h4>Market Rates as of today</h4>
        </Grid>
        <EvInput
          label="Interest Rate on automobile loans"
          value={interestRate}
          description="You can update the interest rate if desired"
          handleChange={handleInterestRateChange}
          endUnit="%"
        />
        <EvInput
          label="Electricity Charges"
          value={electricityCharges}
          description="You can update the charges as per rates in your area"
          handleChange={handleElectricityChargesChange}
          startUnit="Rs"
          endUnit="/kwh"
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Cost Estimates</h4>
        </Grid>
        <EvInput
          label="Daily Running Cost"
          value={runningCost}
          description="Running cost"
          startUnit="Rs"
          endUnit="/km"
          readonly
        />
        <EvInput
          label="Total Running Cost"
          value={totalRunningCost}
          description="Running cost including cost of change of battery"
          startUnit="Rs"
          endUnit="/km"
          readonly
        />
      </Paper>
    </div>
  );
};

EVCalculator.propTypes = {
  type: PropTypes.string.isRequired,
};

export default EVCalculator;
