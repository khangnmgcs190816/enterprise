import { updateComment } from "./api";
import CommentForm from "./CommentForm";
import useFetch from "../Idea/useFetch";
import { useParams } from "react-router-dom";

// const listComment = [{
//     id: "4",
//     content: "your idea sucks 1",
//     created_at: "23:59 1-1-2022",
//     closed_date: "23:59 30-4-2023"
// },
// {
//     id: "5",
//     content: "your idea sucks 2",
//     created_at: "23:59 1-1-2022",
//     closed_date: "23:59 30-4-2023"
// },
// {
//     id: "6",
//     content: "your idea sucks 3",
//     created_at: "23:59 1-1-2022",
//     closed_date: "23:59 30-4-2023"
// }];

// const Comment = () => {
//     return (
//         <>
//             <div>
//                 <form>
//                     <input type="textarea" name="content" placeholder="Write something"></input>

//                     {/* author of cmt can be hidden */}
//                     {/* <input type="checkbox">Comment as Anonymous</input> */}
//                     <button type="submit">Post</button>
//                 </form>
//             </div>
//             <Divider></Divider>
//             <CommentList></CommentList>
//         </>
//     )
// }

// const CommentList = ({ id }) => {

//     let commentList = listComment;
//     console.log(commentList)

//     return (
//         <h1>
//             {
//                 commentList.map((comment) => (
//                     <Card style={{ margin: "2rem" }} >
//                         {comment.content}
//                         <Divider></Divider>
//                         {comment.created_at}
//                     </Card>
//                 ))
//             }

//         </h1>
//     );
// }



const Comment = ({comment, replies, currentUserId, deleteComment, updateComment, activeComment, addComment, setActiveComment, parentId = null}) => {
    const { commentId } = useParams();
    const data = useFetch("http://localhost:8080/comment/");

    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.created_at) >fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;
    const created_at = new Date(comment.created_at).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;

    return ( 
        <div className="comment">
            <div className="comment-image-container">
                <img/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.id}</div>
                    <div>{created_at}</div>
                </div>
                {!isEditing && <div className="comment-text">{comment.content}</div>}
                {isEditing &&(
                    <CommentForm
                    submitLabel="Update"
                    hasCancelButton
                    initialText={comment.content}
                    handleSubmit={(text) => updateComment(text, comment.id)}
                    handleCancel={() =>setActiveComment(null)}
                    />
                )}
                <div className="comment-actions">
                    {canReply && <div className="comment-action" onClick={() => setActiveComment({id: comment.id, type:'replying'})}>Reply</div>}
                    {canEdit && <div className="comment-action" onClick={() => setActiveComment({id: comment.id, type:'editing'})}>Edit</div>}
                    {canDelete && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>}
                </div>
                {isReplying && (
                    <CommentForm 
                    submitLabel="Reply" 
                    handleSubmit={(text) => addComment(text, replyId)}/>
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (<Comment comment={reply} key={reply.id} replies={[]} currentUserId={currentUserId} deleteComment={deleteComment} updateComment={updateComment} addComment={addComment} activeComment={activeComment} setActiveComment={setActiveComment} parentId={comment.id}/>))}
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Comment;