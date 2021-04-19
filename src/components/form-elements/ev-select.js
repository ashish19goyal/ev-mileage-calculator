import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EvSelect = ({ items, handleChange, label, value, description }) => {
  const classes = useStyles();
  let menuItems =
    items != null
      ? items.map((item) => <MenuItem value={item}>{item}</MenuItem>)
      : "";

  return (
    <Grid container wrap="nowrap">
      <FormControl className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menuItems}
        </Select>
        <FormHelperText>{description}</FormHelperText>
      </FormControl>
    </Grid>
  );
};

EvSelect.propTypes = {
  items: PropTypes.array,
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default EvSelect;
