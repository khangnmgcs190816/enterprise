import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const data = {
  // take the name in department
  labels: ["Math", "Biology", "Physics", "IT", "Business"],
  datasets: [
    {
      //number of ideas belong to that department
      data: [6, 7, 10, 44, 23],

      // để yên đấy, xin cảm ơn
      backgroundColor: ["red", "blue", "yellow", "green", "purple"],
    },
  ],
};

function PieChart() {
  return (
    <div
      style={{
        float: "right",
        padding: "0rem 10rem 0rem",
        border: "1px solid red",
      }}
    >
      <h3 style={{ margin: "0rem 0rem 2rem 3rem" }}>
        Number of ideas per department
      </h3>

      {/* Chart area: labels+color and chart */}
      <div style={{ width: "400px" }}>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default PieChart;
