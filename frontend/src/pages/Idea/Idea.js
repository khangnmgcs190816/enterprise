import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../../components/errorHandling/PageNotFound";
import LoadingIndicator from "../../components/Loading";
import SearchFunction from "../../components/Search/SearchFunction";
// import useFetch from "../../services/useFetch";
import useAxios from "../../services/useAxios";
import { Box, Divider } from "@mui/material";
import FilterIdea from "../../components/Idea/FilterIdea";
import NewIdeaBtn from "../../components/Idea/IdeaButtons";
import axios from "axios";
import Paging from "../../components/Paging";
import queryString from "query-string";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@material-ui/core";
// import ThumbsCount from "../../components/Idea/Thumbs";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Idea = () => {
  const { categories } = useParams();

  const { response, loading, error } = useAxios({
    url: "http://127.0.0.1:8000/ideas?limit=5&skip=0",
    method: "get",
  });

  const [ideas, setIdeas] = useState([]);
  const [ownerName, setOwnerName] = useState();

  const [page, setPage] = useState(1);

  const limit = 5;
  const startIndex = (page - 1) * limit;
  //const selectedIdeas = ideas.slice(startIndex, startIndex+limit);
  const [pagination, setPagination] = useState({
    limit: 5,
    skip: 0,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    limit: 5,
    skip: 0,
    search: "",
  });

  const [commentscounter, setCommentsCounter] = useState(0);

  useEffect(() => {
    if (response != null) {
      setIdeas(response);

      response.map(async (item) => {
        // const user = await axios.get(`http://localhost:8000/users/${idea.owner}`);
        // setOwnerName(user.data.name);
        const user = await axios.get(
          `http://localhost:8000/users/${item.owner}`
        );
        setOwnerName(user.data.name);
      });
    }
  }, [response]);

  useEffect(() => {
    const fetchIdeaList = async () => {
      try {
        const comments = await axios.get(`http://localhost:8000/comments`);
        setCommentsCounter(comments.data.length);
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://127.0.0.1:8000/ideas?${paramsString}`;
        const response = await axios.get(requestUrl);
        const re = await axios.get(`http://127.0.0.1:8000/ideas`);
        setTotalPages(Math.ceil(re.data.length / limit));
        setIdeas(response.data);
        setPagination(response.data);
      } catch (error) {
        console.log("failed to fetch post list", error.message);
      }
    };
    fetchIdeaList();
  }, [filters]);

  const handlePageClick = (num) => {
    setPage(num);
    setFilters({
      ...filters,
      skip: (num - 1) * limit,
    });
  };

  const handleFiltersChange = (newFilters) => {
    console.log(newFilters);
    setFilters({
      ...filters,
      skip: 0,
      search: newFilters.searchTerm,
    });
  };

  // const { data: ideas, loading, error } = useFetch(
  //   "idea?category=" + category
  // );

  if (error) throw error;
  if (loading) return <LoadingIndicator />;
  if (ideas.length === 0) return <PageNotFound />;

  return (
    <Box
      sx={{
        margin: "0rem 3rem",
        maxWidth: "100%",
      }}
    >
      {/* Filter area */}
      <Box
        sx={{
          display: "flex",
          p: 1,
          m: 2,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <FilterIdea />
        <SearchFunction onSubmit={handleFiltersChange} />
        <NewIdeaBtn />
        {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}
      </Box>
      <Divider />

      {/* Idea list */}

      <Box
        sx={{
          margin: "2rem 5rem 2rem 5rem",
          padding: "2rem 3rem 3rem 3rem",
          border: 1,
          borderRadius: "25px",
          borderColor: "white",
          listStyle: "none",
          boxShadow: 4,
          maxHeight: "100%",
        }}
      >
        {ideas.map((idea) => {
          return (
            <List>
              <ListItem alignItems="flex-start" key={idea._id}>
                {/* <Link to={`/idea/${idea._id}`}> */}
                {/* <h3 component={Link} to={`/idea/${idea._id}`} variant="h3" key={idea._id}>{idea.title}</h3> */}
                {/* </Link> */}
                {/* <Typography variant="body1">{idea.content}</Typography>
                                    <Typography variant="subtitle1">{idea['ownerName']}</Typography> */}
                <ListItemText
                  primary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="h6"
                        color="text.primary"
                        data-testid="idea-title"
                      >
                        <Link
                          to={`/ideas/${idea._id}`}
                          underline="hover"
                          key={idea._id}
                        >
                          {idea.title}
                        </Link>
                        - by {ownerName}
                      </Typography>
                    </>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Views: {idea.views}
                        <br />
                        Content: {idea.content}
                      </Typography>
                      <Box sx={{ display: "flex" }} fullWidth>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <IconButton
                            color="secondary"
                            aria-label="likes"
                            component="span"
                          >
                            <ThumbUpOffAltIcon />
                          </IconButton>
                          <Typography>(1)</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <IconButton
                            color="secondary"
                            aria-label="dislikes"
                            component="span"
                          >
                            <ThumbDownOffAltIcon />
                          </IconButton>
                          <Typography>(3)</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <IconButton
                            color="secondary"
                            aria-label="comments"
                            component="span"
                          >
                            <ChatBubbleOutlineOutlinedIcon />
                          </IconButton>
                          <Typography>{commentscounter}</Typography>
                        </Box>
                      </Box>
                      <Divider />
                    </>
                  }
                  // secondary={
                  //   <>
                  //     <Typography
                  //       sx={{ display: "inline" }}
                  //       component="span"
                  //       variant="body2"
                  //       color="text.primary"
                  //     >
                  //       Views: {idea.views}
                  //     </Typography>
                  //     <ThumbsCount />
                  //     <Divider variant="inset" />
                  //   </>
                  // }
                />
              </ListItem>
            </List>
          );
        })}

        {/* Pagination area */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Pagination count={10} variant="outlined" color="primary"/> */}

          <Paging
            pagination={pagination}
            totalPages={totalPages}
            handlePageClick={handlePageClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Idea;
