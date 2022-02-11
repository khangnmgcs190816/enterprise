import { useState, useEffect } from "react";
import IdeaList from "../../pages/Idea/Idea.js";
import useFetch from "../../components/Idea/useFetch";

const Idea = () => {
  // const [ideas, setIdeas] = useState(null);
  const {
    data: idea,
    isPending,
    error,
  } = useFetch("http://localhost:8080/idea");

  useEffect(() => {
    fetch("http://localhost:8080/idea")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="home">
      <h2>Homapage</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {idea && <IdeaList props={idea} />}
    </div>
  );
};

export default Idea;
