import { useState, useEffect } from "react";
// import IdeaList from "../../pages/Idea/Idea.js";
// import useFetch from "../../components/Idea/useFetch";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";


const Idea = () => {
  const url = "http://localhost:8080/idea";


  const [ideas, setIdeas] = useState([{ idea: 1, title: 'loading', content: 'loading' }]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const ideas = await res.json();
      setIdeas(ideas);
      console.log(ideas)
    }
    fetchData();
  }, [url])


  return (

    <div className="home">
      <NavBar></NavBar>
      <Search page="idea"></Search>
      <h2>Homepage</h2>
      {/* {error && <div>{error}</div>} */}
      {/* {isPending && <div>Loading...</div>} */}
      {/* {ideas && <IdeaList props={ideas} />} */}
      {
        ideas.map((idea) => {
          return (
            <li >
              <ul key={idea.id}>
                {/* {idea.id}
                {idea.title}
                {idea.content} */}
                <Link to={`/idea/${idea.id}`}>
                  <h2>{idea.title}</h2>
                </Link>
                <h3>{idea.content}</h3>
              </ul>
            </li>);
        })
      }

    </div>
  );
}

export default Idea;
