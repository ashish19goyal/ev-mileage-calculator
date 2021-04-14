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
import Done from "@material-ui/icons/Done";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const HomePage = () => {
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
    }
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={10}>
          <div style={{ maxWidth: `500px` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={12}>
          <h2>EV Mileage Calculator</h2>
          <h5>
            Estimate the performance of your next desired Electric Vehicle.
            Compare its performance with your Petrol or Diesel Vehicle.
          </h5>
        </Grid>
      </Grid>
      <Divider />
      <List component="nav" className={classes.root}>
        <ListItem
          id="features"
          button
          onClick={() => handleClick("twowheelers")}
        >
          <ListItemIcon>
            <MotorcycleIcon />
          </ListItemIcon>
          <ListItemText primary="2 Wheelers" />
          {twowheelers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={twowheelers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Material UI Framework" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Progressive Web App" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="SEO" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Offline Support" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Roboto Typeface (self hosted)" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick("threewheelers")}>
          <ListItemIcon>
            <LocalShippingOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="3 Wheelers" />
          {threewheelers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={threewheelers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Based on Gatsby Default Starter" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Uses Gatsby Material UI Plugin" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick("fourwheelers")}>
          <ListItemIcon>
            <DriveEtaIcon />
          </ListItemIcon>
          <ListItemText primary="4 Wheelers" />
          {fourwheelers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={fourwheelers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Based on Gatsby Default Starter" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Uses Gatsby Material UI Plugin" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Layout>
  );
};

export default HomePage;
