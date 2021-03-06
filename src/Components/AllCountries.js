import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    color: "#1733CD",
    textTransform: "uppercase",
    fontWeight: 799,
  },
}));

export default function AllCountries() {
  const [globalData, setGlobalData] = useState([{}]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();

      setGlobalData(Object.values(Object.values(data.countryitems[0])));
      console.log(Object.values(Object.values(data.countryitems[0])));
    }
    getData();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Country Names</th>
          <th>Total Cases</th>
          <th>Total Active Cases</th>
        </tr>
        {globalData.map((key, ind) => {
          return (
            <tr>
              <td>{globalData[ind].title}</td>
              <td>{globalData[ind].total_cases}</td>
              <td>{globalData[ind].total_active_cases}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
