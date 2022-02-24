import { useState } from "react";
import Comments from './Comments';

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, initialText = "", handleCancel }) => {
  var date = new Date();
  var parId = Comment.parentId;
  const [content, setContent] = useState(initialText);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState("");
  const [parentId, setParentId] = useState(null);
  const [createdAt, setCreateDate] = useState(date);
  const [closedDate, setCloseDate] = useState();
  const isTextareaDisable = content.length === 0;
  const [isPending, setIsPending] = useState(false);

  const onSubmit = event => {

    event.preventDefault();
    const comment = { content, username, userId, parentId, createdAt, closedDate };
    handleSubmit(content);
    setContent("");

    setIsPending(true);
    fetch("http://localhost:8081/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    }).then(() => {
      // console.log(comment);
      // console.log(Comment.parentId);
      console.log("new comment added");
      setIsPending(false);
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)} />
      <button className="comment-form-button" disabled={isTextareaDisable}>{submitLabel}</button>
      {hasCancelButton && (
        <button type="button" className="comment-form-button comment-form-cancel-button" onClick={handleCancel}>Cancel</button>
      )}
    </form>
  );
}

export default CommentForm;