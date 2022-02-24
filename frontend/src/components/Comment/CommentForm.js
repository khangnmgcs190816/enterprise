import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Box, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) => {
  const [content, setContent] = useState(initialText);
  const isTextareaDisable = content.length === 0;
  const [isPending, setIsPending] = useState(false);
  const label = "Comment as Anonymous";

  const onSubmit = (event) => {
    event.preventDefault();
    const comment = { content };
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
  };
  return (
    <Box
      sx={{
        m: 2,
        p: 1,
      }}
    >
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write something..."
              multiline
              rows={2}
              size="small"
              sx={{
                width: "85%",
              }}
            ></TextField>
            <Button disabled={isTextareaDisable} variant="contained">
              {submitLabel}
            </Button>

            {hasCancelButton && (
              <Button
                type="button"
                className="comment-form-button comment-form-cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            )}
          </Box>
          <FormControlLabel control={<Switch defaultChecked />} label={label} />
        </Box>
      </form>
    </Box>
  );
};

export default CommentForm;
