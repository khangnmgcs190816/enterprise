import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../services/useFetch.js";
import Comments from "../Comment/Comments";
import axios from "axios";
import useAxios from "../../services/useAxios";
import { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "@material-ui/core";
import { ReturnLink } from "./IdeaButtons";

const COMMENT_URL = "http://localhost:8000/comments";
const baseURL = "http://localhost:8000";

let viewUpdated = false;
const IdeaDetails = () => {
  const { id } = useParams();

  const { data: idea, error, isPending } = useFetch("ideas/" + id);

  const navigate = useNavigate();

  useEffect(() => {
    axios.patch(`${baseURL}/ideas/${id}?views=1`).then((r) => { });

  }, []);

  const handleClick = () => {
    fetch("http://localhost:8000/ideas/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/idea");
    });
  };

  return (
    <Box
      sx={{
        margin: "5rem 10rem 5rem 10rem",
        p: 3,
        border: 1,
        borderColor: "white",
        boxShadow: 4,
        borderRadius: "25px",
        maxWidth: "100%",
      }}
    >
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {idea && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <ReturnLink />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Typography variant="h4" color="primary">
              {idea.title}
              <IconButton onClick={handleClick}>
                <ClearIcon />
              </IconButton>
            </Typography>
          </Box>

          <Typography variant="subtitle1">ID: {idea._id}</Typography>
          <Box>
            <Typography variant="h6" color="primary">
              Content:
            </Typography>
            <Typography variant="body1">{idea.content}</Typography>
          </Box>
        </Box>
      )}
      <Divider sx={{ m: 2 }}>Comments</Divider>
      {<Comments
        commentsUrl={COMMENT_URL}
        ideaId={id}
        currentUserId="62184aad8150e62e4251a14d"
      />}
    </Box>
  );
};

export default IdeaDetails;
