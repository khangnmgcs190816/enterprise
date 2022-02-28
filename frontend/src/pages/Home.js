import { Search } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../components/errorHandling/PageNotFound";
import LoadingIndicator from "../components/Loading";
// import NavBar from "../components/Header/NavBar";
// import useFetch from '../services/useFetch';
import useAxios from "../services/useAxios";
import { Button } from "@mui/material";
import styled from "@emotion/styled";


const Home = () => {
  const { response, loading, error } = useAxios({
    url: "ideas",
    method: "get",
  });

  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    if (response != null) {
      setIdeas(response);
    }
  }, [response]);

  if (error) throw error;
  if (loading) return <LoadingIndicator />;
  if (ideas.length === 0) return <PageNotFound />;

  return (
    <div className="home">
      <Search page="idea"></Search>
      <h1>Welcome</h1>

      <section id="filters">
        <label htmlFor="category">Filter by:</label>{" "}
        <select
          id="size"
          // value={category}
          onChange={() => { }}
        >
          <option value="Latest Ideas">Latest Ideas</option>
          <option value="Latest Comments">Latest Comments</option>
          <option value="Most Popular">Most Popular</option>
          <option value="Most Viewed">Most Viewed</option>
          <option value="Most Recent">Most Recent</option>
          <option value="Most Comments">Most Comments</option>
          <option value="CategoryCreate">CategoryCreate</option>
        </select>
        {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}
      </section>
      <section id="filters">
        <label htmlFor="category">CategoryCreate:</label>{" "}
        <select
          id="size"
          // value={category}
          onChange={() => { }}
        >
          <option value="Teaching">Teaching</option>
          <option value="Office">Office</option>
          <option value="Red">Red</option>
          <option value="Red">Red</option>
          <option value="Red">Red</option>
        </select>
        {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}
      </section>

      <div>
        <Button
          sx={{
            margin: "10rem 0rem 0rem 0rem",
          }}
        >
          Spotlight Ideas
        </Button>
      </div>
    </div>
  );
};

export default Home;
