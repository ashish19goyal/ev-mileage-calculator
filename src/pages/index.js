import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import Seo from "../components/seo";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import EVCalculator from "../components/ev-calculator";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItem: {
    fontWeight: "bold",
    fontSize: 15,
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  const [twowheelers, settwowheelers] = React.useState(true);
  const [threewheelers, setthreewheelers] = React.useState(false);
  const [fourwheelers, setfourwheelers] = React.useState(false);

  function handleClick(id) {
    switch (id) {
      case "twowheelers":
        setfourwheelers(false);
        setthreewheelers(false);
        settwowheelers(!twowheelers);
        break;
      case "threewheelers":
        settwowheelers(false);
        setfourwheelers(false);
        setthreewheelers(!threewheelers);
        break;
      case "fourwheelers":
        settwowheelers(false);
        setthreewheelers(false);
        setfourwheelers(!fourwheelers);
        break;
      default:
        settwowheelers(false);
        setthreewheelers(false);
        setfourwheelers(false);
    }
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={10} sm={3}>
          <div style={{ maxWidth: `500px` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <h2>EV Mileage Calculator</h2>
          <p>
            Estimate the performance of your next desired Electric Vehicle.
            {/* Compare its performance with your Petrol or Diesel Vehicle. */}
          </p>
        </Grid>
      </Grid>
      <Divider />
      <List component="nav" className={classes.root}>
        <ListItem button onClick={() => handleClick("fourwheelers")}>
          <ListItemIcon>
            <h3>
              <DriveEtaIcon />
            </h3>
          </ListItemIcon>
          <ListItemText primary={<h3>4 Wheelers</h3>} />
          {fourwheelers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={fourwheelers} timeout="auto" unmountOnExit>
          <EVCalculator type="fourWheelers" />
        </Collapse>
        <ListItem
          id="features"
          button
          onClick={() => handleClick("twowheelers")}
        >
          <ListItemIcon>
            <h3>
              <MotorcycleIcon />
            </h3>
          </ListItemIcon>
          <ListItemText primary={<h3>2 Wheelers</h3>} />
          {twowheelers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={twowheelers} timeout="auto" unmountOnExit>
          <EVCalculator type="twoWheelers" />
        </Collapse>
        <ListItem button onClick={() => handleClick("threewheelers")}>
          <ListItemIcon>
            <h3>
              <LocalShippingOutlinedIcon />
            </h3>
          </ListItemIcon>
          <ListItemText primary={<h3>3 Wheelers</h3>} />
          {threewheelers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={threewheelers} timeout="auto" unmountOnExit>
          <EVCalculator type="threeWheelers" />
        </Collapse>
      </List>
    </Layout>
  );
};

export default IndexPage;
