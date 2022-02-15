import { useState, useEffect } from "react";
// import IdeaList from "../../pages/Idea/Idea.js";
// import useFetch from "../../components/Idea/useFetch";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../../components/errorHandling/PageNotFound";
import LoadingIndicator from "../../components/Loading";
import NavBar from "../../components/Header/NavBar";
import Search from "../../components/Search/Search";
import useFetch from "../../services/useFetch";
import IdeaCreate from "../../components/Idea/IdeaCreate";
import { Pagination } from "@mui/material";
import Comment from "../../components/Comment/Comment";


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

  const { data: ideas, loading, error } = useFetch(
    "idea"
  );

  // const { data: ideas, loading, error } = useFetch(
  //   "idea?category=" + category
  // );



  if (error) throw error;
  if (loading) return <LoadingIndicator />;
  if (ideas.length === 0) return <PageNotFound />;

  return (

    <div className="home">
      <Search page="idea"></Search>
      <h2>Homepage</h2>
      <section id="filters">
        <label htmlFor="category">Filter by Category:</label>{" "}
        <select
          id="size"
          value={category}
          onChange={() => { }}
        >
          <option value="">All category</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>
        {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}
      </section>
      {
        ideas.map((idea) => {
          return (
            <li >
              <ul key={idea.id}>
                {/* {idea.id}
                {idea.title}
                {idea.content} */}
                <Link to={`/idea/${idea.id}`}>
                  <h2 key={idea.id}>{idea.title}</h2>
                </Link>
                <h3>{idea.content}</h3>
                <Comment></Comment>
              </ul>
            </li>);
        }
        )
      }
      <IdeaCreate></IdeaCreate>
      <Pagination count={10} variant="outlined" color="primary" />

    </div>
  );
}

export default Idea;
