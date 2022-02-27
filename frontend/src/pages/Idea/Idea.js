import * as React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../../components/errorHandling/PageNotFound";
import LoadingIndicator from "../../components/Loading";
import SearchFunction from "../../components/Search/SearchFunction";
// import useFetch from "../../services/useFetch";
import { Pagination } from "@mui/material";
import useAxios from "../../services/useAxios";
import { Box, Divider } from "@mui/material";
import FilterIdea from "../../components/Idea/FilterIdea";
import NewIdeaBtn from "../../components/Idea/IdeaButtons";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from '@material-ui/core';
import ThumbsCount from "../../components/Idea/Thumbs"
import axios from "axios";

const Idea = () => {


    const { categories } = useParams();

<<<<<<< HEAD
    const {response, loading, error} = useAxios({
        url: "http://localhost:8000/ideas?limit=20&skip=0",
=======
    const { response, loading, error } = useAxios({
        url: "http://localhost:8000/ideas",
>>>>>>> 15957408538c82a5731ca56b9061ba6c3c4ab514
        method: "get",
    });

    const [ideas, setIdeas] = useState([]);
    const [ownerName, setOwnerName] = useState();

    useEffect(() => {
        if (response != null) {
            setIdeas(response);
            response.map(async (idea) => {
                const user = await axios.get(`http://localhost:8000/users/${idea.owner}`);
                setOwnerName(user.data.name);
            });
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
                    <SearchFunction page="idea" />
                    <NewIdeaBtn />
                </Box>
            </Box>
            <Divider />

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
                {

                    ideas.map((idea) => {
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
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="h6"
                                                    color="text.primary"
                                                >
                                                    <Link to={`/ideas/${idea._id}`} underline="hover" key={idea._id}>
                                                        {idea.title}
                                                    </Link>

                                                    - by {ownerName}
                                                </Typography>
                                            </>

                                        }
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {idea.content}
                                                </Typography>
                                                <ThumbsCount />
                                                <Divider variant="inset" />
                                            </>
                                        }
                                    />
                                </ListItem>
                            </List>
                        );
                    }
                    )}

                {/* Pagination area */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Pagination count={10} variant="outlined" color="primary" />
                </Box>
            </Box>
        </Box >
    );
};

export default Idea;
