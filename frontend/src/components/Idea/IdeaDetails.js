import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../../services/useFetch.js";
import Comments from "../Comment/Comments";
import axios from "axios";
import useAxios from "../../services/useAxios";
import {useEffect, useState} from "react";

let viewUpdated = false;
const IdeaDetails = () => {
    const {id} = useParams();


    const {
        data: idea,
        error,
        isPending,
    } = useFetch("ideas/" + id);


    const navigate = useNavigate();

    useEffect(() => {

        axios.patch(`http://localhost:8000/ideas/${id}?views=1`).then((r) => {
        });

    }, [])


    const handleClick = () => {
        fetch('http://localhost:8000/ideas/' + id, {
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
                    ID: <div>{idea._id}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
            <Comments
                commentsUrl="http://localhost:8081/comment"
                ideaId={id}
                currentUserId="1"
            />
        </div>
    );
};

export default IdeaDetails;