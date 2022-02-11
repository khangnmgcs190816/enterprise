import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSubmit}>
        <label>Search: </label>
        <input type='text' value={searchTerm} name='search' onChange={handleChange} >

        </input>

        <input type='submit'>

        </input>
      </form>

      <br></br>

      <h1>
        {searchTerm}
      </h1>
    </div>
  );
};

export default Search;
