import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
}));

const EvInput = ({
  label,
  value,
  description,
  handleChange,
  startUnit,
  endUnit,
  multiline,
  readonly,
}) => {
  const classes = useStyles();
  let v = readonly ? "filled" : "outlined";
  return (
    <Grid container wrap="nowrap">
      <TextField
        label={label}
        defaultValue={value}
        helperText={description}
        className={classes.formControl}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startUnit}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">{endUnit}</InputAdornment>
          ),
          readOnly: readonly,
        }}
        multiline
        variant={v}
      />
    </Grid>
  );
};

EvInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  description: PropTypes.string,
  multiline: PropTypes.bool,
  startUnit: PropTypes.string,
  endUnit: PropTypes.string,
  readonly: PropTypes.bool,
};

export default EvInput;
