import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

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

const GridFaq = ({ serial, question, answer, list }) => {
  const classes = useStyles();
  let items =
    list != null
      ? list.map((item) => (
          <Grid item xs={12}>
            <li>{item}</li>
          </Grid>
        ))
      : "";
  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap">
        <Grid item>
          <Avatar>{serial}</Avatar>
        </Grid>
        <Grid item xs={12} className={classes.grid}>
          <Typography>
            <b>{question}</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>{answer}</Typography>
        </Grid>
        {items}
      </Grid>
    </Paper>
  );
};

GridFaq.propTypes = {
  serial: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default GridFaq;
