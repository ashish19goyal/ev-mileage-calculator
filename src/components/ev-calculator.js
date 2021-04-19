import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import TataNexon from "../ev-models/tata-nexon";
import EvSelect from "./form-elements/ev-select";

const EVCalculator = ({ models }) => {
  const [model, setModel] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [range, setRange] = React.useState("");
  const [mileage, setMileage] = React.useState("");
  const [batteryCapacity, setBatteryCapacity] = React.useState("");
  const [batteryCycles, setBatteryCycles] = React.useState("");

  const handleModelChange = (event) => {
    setModel(event.target.value);
    switch (model) {
      case "TataNexon":
        setModelInfo(TataNexon);
        return;
    }
  };

  const setModelInfo = (modelInfo) => {
    setDescription(modelInfo.description);
    setRange(modelInfo.range);
    setMileage(modelInfo.range);
    setBatteryCapacity(modelInfo.battery.capacity);
    setBatteryCycles(modelInfo.battery.cycles);
  };

  return (
    <Paper>
      <EvSelect
        items={models}
        handleChange={handleModelChange}
        label="EV Model"
        value={model}
        description="Mileage will be calculated for this model"
      />
    </Paper>
  );
};

EVCalculator.propTypes = {
  models: PropTypes.array.isRequired,
};

export default EVCalculator;
