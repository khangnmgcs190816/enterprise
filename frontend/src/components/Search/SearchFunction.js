import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchFunction = ({ page = "idea" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${page}/?search=${searchTerm}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
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
          onChange={handleChange}
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
