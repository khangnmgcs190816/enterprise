import { useState, useEffect } from "react";
import queryString from 'query-string';
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../../components/errorHandling/PageNotFound";
import LoadingIndicator from "../../components/Loading";
import SearchFunction from "../../components/Search/SearchFunction";
// import useFetch from "../../services/useFetch";
import { Pagination } from "@mui/material";
import Paging from "../../components/Pagination/Paging";
import useAxios from "../../services/useAxios";
import { Box, Divider } from "@mui/material";
import FilterIdea from "../../components/Idea/FilterIdea";
import NewIdeaBtn from "../../components/Idea/IdeaButtons";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Idea = () => {
  // const url = "http://localhost:8080/idea";
  // const [ideas, setIdeas] = useState([{ idea: 1, title: 'loading', content: 'loading' }]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const ideas = await res.json();
  //     setIdeas(ideas);
  //     console.log(ideas)
  //   }
  //   fetchData();
  // }, [url])

  const { category } = useParams();

  const { response, loading, error } = useAxios({
    url: "/idea",
    method: "get",
  });

  const [ideaList, setIdeaList] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/${page}/?search=${searchTerm}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilter(value);
  };
  let dataSearch = ideas.filter(item => {
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  });
  useEffect(() => {
    if (response != null) {
      setIdeas(response);
    }
  }, [response]);

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
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
          }}
        >
          <FilterIdea />
        </Box>
        {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}

        {/* Search + Create button area */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          {/* <SearchFunction page="idea"></SearchFunction> */}
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              width: "30rem",
              maxWidth: "50%",
            }}
          >
            <form>
              <TextField
                type="text"
                value={filter}
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
          <NewIdeaBtn />
        </Box>
      </Box>
      <Divider></Divider>

      {/* Idea List area */}
      <Box
        sx={{
          margin: "2rem 0rem 2rem 0rem",
          padding: "1rem 2rem 2rem 2rem",
          border: 1,
          borderRadius: "25px",
          borderColor: "white",
          listStyle: "none",
          boxShadow: 4,
          maxHeight: "100%",
        }}
      >
        {dataSearch.map((idea) => {
          return (
            <li>
              <ul key={idea.id}>
                <Link to={`/idea/${idea.id}`}>
                  <h3 key={idea.id}>{idea.title}</h3>
                </Link>
                <p>{idea.content}</p>
              </ul>
            </li>
          );
        })}

        {/* Pagination area */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination count={10} variant="outlined" color="primary" />
          {/* <Paging pagination={pagination} onPageChange={handlePageChange} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Idea;
