import { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../data/ideas.json";

const IdeaList = ({idea}) => {
    console.log("oday",idea);
  return (
    <div className="idea-list">
      Idea
    </div>
  );
};

export default IdeaList;