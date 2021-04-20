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

const EvText = ({ label, value, description, multiline }) => {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap">
      <FormControl className={classes.formControl}>
        <TextField
          label={label}
          value={value}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
          helperText={description}
          multiline
        />
      </FormControl>
    </Grid>
  );
};

EvText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
  multiline: PropTypes.bool,
};

export default EvText;
