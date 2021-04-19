import React from "react";
import PropTypes from "prop-types";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

/*
 * This components creates a container for a information section
 */

const Info = ({ heading, description, list }) => {
  let items = list != null ? list.map((item) => <li>{item}</li>) : "";
  return (
    <Grid item xs={12}>
      <h4>{heading}</h4>
      <p>{description}</p>
      {items}
      <Divider />
    </Grid>
  );
};

Info.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.node,
};

export default Info;
