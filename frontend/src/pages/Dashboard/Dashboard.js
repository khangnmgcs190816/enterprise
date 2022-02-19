import React, { useEffect, useState } from "react";
// import NavBar from "../../components/Header/NavBar";
// import Dropdown from "./Dropdown";
// import useFetch from "../../services/useFetch";
import useAxios from "../../services/useAxios";
import LoadingIndicator from "../../components/Loading";
import PageNotFound from "../../components/errorHandling/PageNotFound";
import Tabs from "./Tabs";
// import PieChart from "../../components/PieChart";

const Dashboard = () => {
  // const { data: ideas, loading, error } = useFetch("idea");
  const { response, loading, error } = useAxios({
    url: "/idea",
    method: "get"
  });

  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    if (response != null) {
      setIdeas(response);
    }
  }, [response])

  if (error) throw error;
  if (loading) return <LoadingIndicator />;
  if (ideas.length === 0) return <PageNotFound />;

  return (
    <div>
      <Tabs />
    </div>
  );
};

export default Dashboard;
