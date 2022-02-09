import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const IdeaDetails = () => {
  const { id } = useParams();
  const {
    data: idea,
    error,
    isPending,
  } = useFetch("http://localhost:8080/idea/" + id);

  return (
    <div className="idea-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {idea && (
        <article>
          Title: <h2>{idea.title}</h2>
          Content: <h2>{idea.content}</h2>
          Author: <div>{idea.user}</div>
        </article>
      )}
    </div>
  );
};

export default IdeaDetails;
