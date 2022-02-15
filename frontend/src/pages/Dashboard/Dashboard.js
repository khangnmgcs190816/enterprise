import React, { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import Dropdown from "./Dropdown";
import useFetch from "../../services/useFetch";
import LoadingIndicator from "../../components/Loading";
import PageNotFound from "../../components/errorHandling/PageNotFound";
import Tabs from "./Tabs";
import PieChart from "../../components/PieChart";

const Dashboard = () => {
  const { data: ideas, loading, error } = useFetch("idea");

  if (error) throw error;
  if (loading) return <LoadingIndicator />;
  if (ideas.length === 0) return <PageNotFound />;

  // npm install --save react-chartjs-2 chart.js

  return (
    <div
      style={{
        width: "45%",
        height: "457px",
        border: "1px solid black",
        float: "left",
      }}
    >
      <h1>Dashboard</h1>
      {/* View by: dropdown (Dept) */}
      <div>
        <Tabs />
        <Dropdown />
        <p>
          Closure Date: { } <button>Download (.csv)</button>
        </p>
      </div>
      <br />

      {/* Dynamic detail panel */}
      <div
        style={{
          border: "1px solid black",
          width: "80%",
          height: "250px",
          margin: "2rem 2rem 0rem 2rem",
        }}
      >
        {/* Number of ideas by employees who belongs in a department */}
        <span>
          Ideas:
          {ideas.length}
        </span>
        <br />

        {/* Idea with most thumbs and comments in the department*/}
        <span>Most popular: N/A</span>
        <br />
        {
          //ideas.filter()
        }

        {/* Idea with most views within department*/}
        <span>Most views: N/A</span>
        <br />

        {/* Newest idea posted by user in this department */}
        <span>Latest idea: N/A</span>
        <br />

        {/* Newest comment in an idea of this department */}
        <span>Latest comment: N/A</span>
        <br />
      </div>

      <div>
        <p>Total ideas: {ideas.length} </p>

        {/* Chart here */}
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
