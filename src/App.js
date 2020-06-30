import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import NavBar from "./NavBar";
import Post from "./Post";
import BarChart from "./BarChart";
import PirChart from "./PirChart";
import PirChart from "./PirChart";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    margin: "0 auto",
    textAlign: "center",
    padding: 15,
    marginTop: 45,
  },
  input: {
    width: "95%",
    marginBottom: "10px",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>

        <form className={classes.root} novalidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
          <CircularProgress value={60} />
          <Post />
        </form>
      </Paper>
      <BarChart />
      <PirChart />
    </div>
  );
}
