import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 500, 200],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function PirChart() {
  return (
    <div>
      <center>
        <h2>Pie Example</h2>
      </center>
      <Pie data={data} height={60} />
    </div>
  );
}
export default PirChart;
