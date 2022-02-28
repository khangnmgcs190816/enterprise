
import {useState, useEffect} from "react";
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi
} from "./api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import data from "../../data/comments.json";
import useFetch from './useFetch';
import PageNotFound from "../../components/errorHandling/PageNotFound";
import LoadingIndicator from "../../components/Loading";
import useAxios from "../../services/useAxios";

import "./styles.css";

const Comments = ({commentsUrl, ideaId, currentUserId}) => {
    // const {data: comments, isPending, error} = useFetch('http://localhost:8081/comment');

    console.log(ideaId);

    const {response, loading, error} = useAxios({
        url: `http://localhost:8000/comments?ideaId=${ideaId}`,
        method: "get",
    });

    const [Comments, setComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);



    // Trong Edited
    const rootComments = Comments.filter(
        (Comment) => Comment.parentId === null && Comment.ideaId === ideaId);
    // Trong Edited

    
    
    const getReplies = commentId => {
        return Comments.filter(Comment => Comment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    const createComment = (text, parentId) => {
        console.log("Add Comment", text, parentId);
        createCommentApi(text, parentId, ideaId).then(comment => {
            setComments([comment, ...Comments])
        });
    }
    // const deleteComment = (commentId) => {
    //     if (window.confirm('Ae you sure')){
    //         deleteCommentApi(commentId).then(() => {
    //             const updatedComments = Comments.filter((Comment) => Comment.id !== commentId)
    //             setComments(updatedComments);
    //         });
    //     }
    // }
    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
            const updatedComments = Comments.map((Comment) => {
                if (Comment._id === commentId) {
                    return {...Comment, body: text};
                }
                return Comment;
            });
            setComments(updatedComments);
            setActiveComment(null);
        });
    };

    useEffect(() => {
        getCommentsApi().then((data) => {
            setComments(data);
        });
    }, []);

    useEffect(() => {
        if (response != null) {
            setComments(response);
        }
    }, [response]);
    if (error) throw error;
    if (loading) return <LoadingIndicator/>;
    if (Comments.length === 0) return <PageNotFound/>;

    return (
        <div className="comments">
            <h3 className="comments-title">Comment</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={createComment}/>
            <div className="comments-container">
                {rootComments.map(rootComment => (
                    <Comment
                        key={rootComment._id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        updateComment={updateComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
            <br/>
        </div>
    );
}

export default Comments;