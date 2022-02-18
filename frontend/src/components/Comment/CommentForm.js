import { useState } from "react";

const CommentForm = ({handleSubmit, submitLabel, hasCancelButton = false, initialText = "", handleCancel}) => {
    const [content,setContent]= useState(initialText);
    const isTextareaDisable = content.length === 0;
    const [isPending, setIsPending] = useState(false);
    const onSubmit = event => {
        
        event.preventDefault();
        const comment = {content};
        handleSubmit(content);
        setContent("");

        setIsPending(true);
        fetch("http://localhost:8080/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
        }).then(() => {
        console.log(comment);
        console.log("new comment added");
        setIsPending(false);
        });
    }
    return ( 
        <form onSubmit={onSubmit}>
            <textarea 
            className="comment-form-textarea" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}/>
            <button className="comment-form-button" disabled={isTextareaDisable}>{submitLabel}</button>
            {hasCancelButton && (
                <button type ="button" className="comment-form-button comment-form-cancel-button" onClick={handleCancel}>Cancel</button>
            )}
        </form>
     );
}
 
export default CommentForm;