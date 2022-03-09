import { useState, useEffect } from "react";
import {
    getComments as getCommentsApi,
    useCreateComment,
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
import axios from "axios";


const token = window.localStorage.getItem('authToken');
const baseURL = 'http://localhost:8000'

const Comments = ({ commentsUrl, ideaId, currentUserId }) => {
    // const {data: comments, isPending, error} = useFetch('http://localhost:8081/comment');
    const [Comments, setComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [rootComments, setRootComments] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                const response = await axios({
                    url: `${baseURL}/comments?ideaId=${ideaId}`,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log("comments of this idea:", response.data);
                if (response != null) {
                    setRootComments(response.data)
                }
            } catch (e) {
                throw e;
            } finally {
                return <LoadingIndicator />;
            }
        })()
    }, [ideaId]);

    // if (response !== null) {
    //     setComments(response.data)
    // }
    // if (loading) return <LoadingIndicator />;
    // if (error) throw error;
    // if (Comments.length === 0) return <PageNotFound />;

    // useEffect(() => {
    //     getCommentsApi().then((data) => {
    //         setComments(data);
    //     });
    //     // Trong Edited
    // }, [ideaId]);

    // useEffect(() => {
    //     setRootComments(Comments.filter(
    //         (Comment) => Comment.parentId === null && Comment.ideaId === ideaId));
    //     // Trong Edited
    // }, [Comments, ideaId])


    const getReplies = commentId => {
        return Comments.filter(Comment => Comment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    // const createComment = (content, parentId) => {
    //     console.log("Add Comment", content, parentId);
    // useCreateComment(text, parentId, ideaId).then(comment => {
    //     setRootComments([comment, ...Comments])
    // });
    // }
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
                    return { ...Comment, body: text };
                }
                return Comment;
            });
            setComments(updatedComments);
            setActiveComment(null);
        });
    };




    return (
        <div className="comments">
            <h3 className="comments-title">Comment</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={
                (text, parentId) => {
                    setRootComments([text, ...Comments])
                }
            } />
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
            <br />
        </div>
    );
}

export default Comments;