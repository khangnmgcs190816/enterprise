import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = ({ page = 'idea' }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${page}/?search=${searchTerm}`);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search: </label>
        <input
          type='text'
          value={searchTerm}
          name='search'
          onChange={handleChange}
          placeholder="Search..."
        >
        </input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Search;

