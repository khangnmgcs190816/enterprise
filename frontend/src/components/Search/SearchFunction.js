import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from 'prop-types';
import { ReturnLink } from "../Idea/IdeaButtons";


const SearchFunction= (page='idea')=>{
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const typingTimeoutRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/${page}/?search=${searchTerm}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);
  };
  


  return (
    <Box
      sx={{
        display: "flex",
        alignSelf: "center",
        width: "30rem",
        maxWidth: "50%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={searchTerm}
          name="search"
          onChange={handleChange.bind(this)}
          placeholder="Search..."
          size="small"
          variant="outlined"
        />
        <IconButton color="primary" aria-label="search" component="span">
          <SearchIcon />
        </IconButton>
      </form>
    </Box>
  );
};

export default SearchFunction;
