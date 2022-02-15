import "chart.js/auto";
import { Pie } from "react-chartjs-2";
// import useFetch from "../services/useFetch";
// import PageNotFound from "./errorHandling/PageNotFound";
// import LoadingIndicator from "./Loading";

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
  // const { data: ideas, loading, error } = useFetch(
  //   "idea"
  // );

  // if (error) throw error;
  // if (loading) return <LoadingIndicator />;
  // if (ideas.length === 0) return <PageNotFound />;


  return (
    <div
      style={{
        float: "right",
        padding: "0rem 10rem 0rem",
        border: "1px solid red",
      }}
    >
      {/* <h1>{ideas.filter((idea) => idea.department = 'Math')}</h1> */}
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
