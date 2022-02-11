import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

const Dashboard = () => {
  const url = "http://localhost:8080/idea";
  const [ideas, setIdeas] = useState([{ idea: 1, title: 'loading', content: 'loading' }]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const ideas = await res.json();
      setIdeas(ideas);
      console.log(ideas)
    }
    fetchData();
  }, [url])

  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;


