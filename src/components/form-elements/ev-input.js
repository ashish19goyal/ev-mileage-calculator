import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const EvInput = ({ label, value, description, handleChange }) => {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap">
      <FormControl className={classes.formControl}>
        <TextField label={label} value={value} helperText={description} />
      </FormControl>
    </Grid>
  );
};

EvInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  description: PropTypes.string,
  multiline: PropTypes.bool,
};

export default EvInput;
