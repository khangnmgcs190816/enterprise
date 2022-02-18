import { useState, useEffect } from "react";
import{ getComments as getCommentsApi,
     createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi} from "./api";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import data from "../../data/comments.json";

const Comments = ({currentUserId}) => {
    const [Comments, setComments ]=useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = Comments.filter(
        (Comment) => Comment.parentId === null);
    console.log("backend comments", Comments);

    const getReplies = commentId => {
        return Comments.filter(Comment => Comment.parentId === commentId).sort((a,b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
    }

    const addComment = (text,parentId) => {
        console.log("addcomment", text, parentId);
        createCommentApi(text, parentId).then(comment => {
            setComments([comment, ...Comments])
        });
    }
    const deleteComment = (commentId) => {
        if (window.confirm('Ae you sure')){
            deleteCommentApi(commentId).then(() => {
                const updatedComments = Comments.filter((Comment) => Comment.id !== commentId)
                setComments(updatedComments);
            });
        }
    }
    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
          const updatedComments = Comments.map((Comment) => {
            if (Comment.id === commentId) {
              return { ...Comment, body: text };
            }
            return Comment;
          });
          setComments(updatedComments);
          setActiveComment(null);
        });
      };

    useEffect(() => {
        getCommentsApi().then((data)=> {
            setComments(data);
        });
    }, []);


    return ( 
        <div className="comments">
            <h3 className="comments-title">Comment</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map(rootComment => (
                    <Comment 
                    key={rootComment.id} 
                    comment={rootComment} 
                    replies={getReplies(rootComment.id)}
                    currentUserId={currentUserId}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Comments;