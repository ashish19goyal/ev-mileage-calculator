import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import EvsInMarket from "../ev-models/evs-in-market";
import EvSelect from "./form-elements/ev-select";
import EvInput from "./form-elements/ev-input";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

  // usage
  const [dailyRun, setDailyRun] = React.useState(50);

  let makesList = [
    ...new Set(EvsInMarket[type].map((vehicle) => vehicle.make)),
  ];

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

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
    calculateCost({
      modelInfo,
      electricityCharges,
      interestRate: event.target.value,
      dailyRun,
    });
  };

  const handleElectricityChargesChange = (event) => {
    setElectricityCharges(event.target.value);
    calculateCost({
      modelInfo,
      electricityCharges: event.target.value,
      interestRate,
      dailyRun,
    });
  };

  const handleDailyRunChange = (event) => {
    setDailyRun(event.target.value);
    calculateCost({
      modelInfo,
      electricityCharges,
      interestRate,
      dailyRun: event.target.value,
    });
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
        dailyRun,
      });
    }
  };

  const calculateCost = ({
    modelInfo,
    electricityCharges,
    interestRate,
    dailyRun,
  }) => {
    let mileage = (modelInfo.battery.capacity * 1000) / modelInfo.range;
    let runningCostValue = ((mileage * electricityCharges) / 1000).toFixed(2);
    setRunningCost(runningCostValue);

    let oneChargeKms =
      (modelInfo.battery.capacity * 1000 * modelInfo.battery.dod * 0.8) /
      mileage;
    let years =
      dailyRun < 0.4 * oneChargeKms
        ? Math.max(10, modelInfo.battery.years)
        : Math.max(5, modelInfo.battery.years);

    let totalKms = years * 365 * dailyRun;

    let allowedTotalKms = Math.min(
      totalKms,
      (years *
        365 *
        modelInfo.battery.capacity *
        1000 *
        modelInfo.battery.dod) /
        mileage
    );

    let actualBatteryYears = allowedTotalKms / 365 / dailyRun;

    let priceIncludingInterest =
      modelInfo.battery.price *
      Math.pow(1 + interestRate / 100, actualBatteryYears);

    let totalRunningCostValue = (
      (mileage * electricityCharges) / 1000 +
      priceIncludingInterest / allowedTotalKms
    ).toFixed(2);
    setTotalRunningCost(totalRunningCostValue);
  };

  let mileage =
    modelInfo.range > 0
      ? Math.round((modelInfo.battery.capacity * 1000) / modelInfo.range)
      : 0;

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
          value={modelInfo.certifiedRange}
          description="Range of vehicle"
          endUnit="km"
          readonly
        />
        <EvInput
          label="Mileage"
          value={mileage}
          description="Mileage of vehicle"
          endUnit="Wh/km"
          readonly
        />
        <EvInput
          label="Top Speed"
          value={modelInfo.topSpeed}
          description="Top speed of the vehicle"
          endUnit="km/h"
          readonly
        />
        <EvInput
          label="Pickup"
          value={modelInfo.pickup}
          description="How good can it accelerate"
          readonly
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Battery Specifications</h4>
        </Grid>
        <EvInput
          label="Price"
          value={modelInfo.battery.price}
          description="Approximate cost of replacement of the battery"
          startUnit="Rs"
          readonly
        />
        <EvInput
          label="Capacity"
          value={modelInfo.battery.capacity}
          description="Energy capacity of the battery"
          endUnit="kwh"
          readonly
        />
        <EvInput
          label="Warranty"
          value={modelInfo.battery.years}
          description="Battery will be replaced by OEM free of cost for underperformance during this time."
          endUnit="years"
          readonly
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
          <h4>Your daily usage</h4>
        </Grid>
        <EvInput
          label="Your daily usage"
          value={dailyRun}
          description="Update based on your usage. This will have an impact on your total cost of ownership"
          handleChange={handleDailyRunChange}
          endUnit="km/day"
        />
      </Paper>
      <Paper className={classes.paper}>
        <Grid>
          <h4>Cost Estimates</h4>
        </Grid>
        <EvInput
          label="Operational Cost"
          value={runningCost}
          description="Running cost"
          startUnit="Rs"
          endUnit="/km"
          readonly
        />
        <EvInput
          label="Capital + Operational Cost"
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
