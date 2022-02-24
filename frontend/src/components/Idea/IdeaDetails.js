import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Comment/useFetch";
import Comments from "../Comment/Comments";

const IdeaDetails = () => {
  const { id } = useParams();
  const {
    data: idea,
    error,
    isPending,
  } = useFetch("http://localhost:8080/idea/" + id);
  const navigate = useNavigate();


  const handleClick = () => {
    fetch('http://localhost:8080/idea/' + idea.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/idea');
    }) 
  }

  return (
    <div className="idea-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {idea && (
        <article>
          Title: <h2>{idea.title}</h2>
          Content: <h2>{idea.content}</h2>
          ID: <div>{idea.id}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
      <Comments commentsUrl="http://localhost:8081/comments"
        currentUserId="1"/>
    </div>
  );
};

export default IdeaDetails;
