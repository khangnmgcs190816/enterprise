import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import { useState } from "react";
import Select from "react-select";
import { InputLabel } from "@mui/material";
import makeAnimated from "react-select/animated";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { lightBlue, grey } from "@mui/material/colors";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// import { colourOptions } from 'react-form';

const TermHeading = styled("h3")({
  textAlign: "center",
});

const Input = styled("input")({
  display: "none",
});

const Terms = styled("div")({
  textAlign: "justify",
  fontSize: 15,
  padding: "0rem 1rem 0rem 1rem",
  overflow: "scroll",
  display: "block",
  maxHeight: "50%",
});

const CheckTerm = styled("div")({
  textAlign: "center",
});

const TitleFrame = styled("div")({
  color: lightBlue[600],
  textAlign: "center",
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: "1rem",
});

const LabelStyle = styled("label")({
  fontStyle: "oblique",
  color: grey[500],
  fontSize: 13,
  display: "flex",
  p: 1,
  m: 1,
  justifyContent: "space-between",
});

const IdeaCreate = () => {
  //title, user, content, thumbsup thumbsdown, academic year, document, craeted at, update at,
  // close date,category, comment
  var date = new Date();
  // const [title, setTitle] = useState({ title: "Title", user: "Thy", etc.});

  const [title, setTitle] = useState("Title");
  const [user, setUser] = useState("thy");
  const [content, setContent] = useState("Please input your idea");
  const [thumbs_up, setThumbsUp] = useState();
  const [thumbs_down, setThumbsDown] = useState();
  const [academic_year, setAcademicyear] = useState("Academic year");
  const [document, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [created_at, setCreateDate] = useState(date);
  const [updated_at, setUpdateDate] = useState();
  const [closed_date, setCloseDate] = useState();
  var [category, setSelectedTag] = useState([]);
  const [isTagPicked, setIsTagPicked] = useState(false);
  const [comment, setComment] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const animatedComponents = makeAnimated();
  const options = [
    { value: "0", label: "red" },
    { value: "1", label: "green" },
    { value: "2", label: "blue" },
  ];

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const [boxes, setBoxes] = useState({});
  function handleChange(e) {
    const {
      target: { id, checked },
    } = e;
    setBoxes({
      ...boxes,
      [id]: checked,
    });
  }

  // var categoryHandle = (e) =>{
  //     getSelectedTag(Array.isArray(e)?e.map(x=>x.label):[]);
  // }

  function isDisabled() {
    const { length } = Object.values(boxes).filter(Boolean);
    return length !== 1;
  }

  // const selectHandler = (event) =>{
  //     setSelectedTag(event.target.value[0]);
  //     setIsTagPicked(true);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const idea = {
      title,
      user,
      content,
      thumbs_up,
      thumbs_down,
      academic_year,
      document,
      created_at,
      updated_at,
      closed_date,
      category,
      comment,
    };

    setIsPending(true);

    fetch("http://localhost:8080/idea", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(idea),
    }).then(() => {
      console.log(idea);
      console.log("new idea added");
      setIsPending(false);
    });
  };

  return (
    // The whole form is put in the Box with border
    <Box
      className="ideacreate"
      sx={{
        border: 1,
        borderColor: "white",
        boxShadow: 4,
        borderRadius: "25px",
        margin: "3rem",
        padding: "2rem",
        maxWidth: "100%",
      }}
    >
      <TitleFrame>Create idea</TitleFrame>
      <Divider
        sx={{
          marginBottom: "1.5rem",
        }}
      ></Divider>

      {/* {comment.map((comment) => (
                <div className="comment-preview" key={comment.id}>
                    <h2>{comment.content}</h2>
                </div>
            ))} */}

      {/* Mainform for input */}
      <form onSubmit={handleSubmit}>
        {/* Label section for displaying datetime data */}
        <div>
          <LabelStyle>
            <span>{academic_year}</span>
            <br />
            <span>This thread will be close on: {closed_date}</span>
          </LabelStyle>
          {/* <TextField
            id="outlined-basic"
            disabled
            variant="outlined"
            type="datetime"
            name="academicyear"
            placeholder={academic_year}
            onChange={(e) => setAcademicyear(e.target.value)}
          /> */}
        </div>
        <br />

        {/* From here is title input */}
        <div>
          <TextField
            id="outlined-basic"
            type="text"
            label="Title"
            variant="outlined"
            name="title"
            placeholder={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              width: "100%",
            }}
          />
        </div>
        <br />

        {/* <div>
          <TextField id="outlined-basic"
            variant="outlined"
            disabled
            type="text"
            name="user"
            placeholder={user}
            defaultValue="thy"
            onChange={(e) => setUser(e.target.value)} />
        </div>
        <br /> */}

        {/* Content input */}
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Your Idea"
            multiline
            rows={4}
            // defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{
              width: "100%",
            }}
          />
        </div>
        <br />
        {/* <div>
                    <label>Thumbs</label>
                    <input type="textarea" name="thumbs" placeholder={thumbs_up} rows ="4" onChange={e => setThumbsUp(e.target.value)} />
                    <input type="textarea" name="thumbs" placeholder={thumbs_down} rows ="4" onChange={e => setThumbsDown(e.target.value)} />
                </div>
                <br/> */}

        {/* Upload Photos and Files are put in Box and flexed */}
        <Box
          sx={{
            margin: "1rem",
            display: "flex",
            p: 1,
            m: 1,
            justifyContent: "space-evenly",
          }}
        >
          <InputLabel htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              placeholder={document}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <Button variant="contained" component="span">
              <PhotoCamera /> Upload Photo
            </Button>
          </InputLabel>
          <InputLabel id="attach-label">
            <Input
              type="file"
              accept="file/*"
              id="contained-button-file"
              placeholder={document}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            ></Input>
            <Button variant="contained" component="span">
              <AttachFileIcon /> Attachments
            </Button>
          </InputLabel>
        </Box>

        {/* {isFilePicked ? (
          <div>
            <p>Filename: {category.name}</p>
            <p>Filetype: {category.type}</p>
            <p>Size in bytes: {category.size}</p>
            <p>
              lastModifiedDate: {category.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )} */}
        {/* <div>
          <label>Create Date </label>
          <input
            readOnly
            type="text"
            name="createdate"
            placeholder={new Date()}
            defaultValue={new Date()}
            onSubmit={(e) => setCreateDate(e.target.value)}
          />
        </div>
        <br />
        
                <div>
                    <label>Update </label>
                    <input disabled type="text" name="update" placeholder={updated_at} onChange={e => setUpdateDate(e.target.value)} />
                </div>
                <br/>

        <div>
          <label>Close Date </label>
          <input
            type="text"
            name="closedate"
            placeholder={closed_date}
            onChange={(e) => setCloseDate(e.target.value)}
          />
        </div>
        <br /> */}

        {/* Tag/Category section with customed Label */}
        <div>
          <InputLabel id="tag-label">Select or create new tags</InputLabel>
          <Select
            labelId="tag-label"
            name="tag"
            closeMenuOnSelect={false}
            placeholder={category}
            isClearable
            components={animatedComponents}
            isMulti
            options={options}
            onChange={(e) =>
              setSelectedTag(Array.isArray(e) ? e.map((x) => x.label) : [])
            }
          />
          {/* //custom add more tags */}
          {/* <center>
            {" "}
            The selected tag: <h3>{category}</h3>
          </center> */}
        </div>
        <br />

        {/* Terms and Conditions with overflow content not yet finished */}
        <div className="term-conditions">
          <TermHeading>Terms and Conditions</TermHeading>
          <Terms>
            <p>
              Et natus molestias et doloribus. Quis quae enim dolores dolores
              aperiam ullam eaque. Eveniet aut et qui alias consequuntur
              expedita consequatur aspernatur. Qui est ut modi aut ut. Non est
              dolor ipsum numquam doloribus deserunt molestiae et animi.
              Voluptatem sint fuga est eum.
            </p>
            <p>
              Et natus molestias et doloribus. Quis quae enim dolores dolores
              aperiam ullam eaque. Eveniet aut et qui alias consequuntur
              expedita consequatur aspernatur. Qui est ut modi aut ut. Non est
              dolor ipsum numquam doloribus deserunt molestiae et animi.
              Voluptatem sint fuga est eum. Et natus molestias et doloribus.
              Quis quae enim dolores dolores aperiam ullam eaque. Eveniet aut et
              qui alias consequuntur expedita consequatur aspernatur. Qui est ut
              modi aut ut. Non est dolor ipsum numquam doloribus deserunt
              molestiae et animi. Voluptatem sint fuga est eum.
            </p>
          </Terms>
        </div>
        <br />

        {/* Checkbox for Terms and Submit button, should change Submitting... button by using LoadingButton */}
        <CheckTerm>
          <div>
            <FormControlLabel
              control={<Checkbox />}
              label="I Agree with Terms & Conditions"
              name="agreement"
              onChange={handleChange}
              sx={{
                marginBottom: "1rem",
              }}
            />
          </div>
          {!isPending && (
            <Button
              variant="contained"
              disabled={isDisabled()}
              startIcon={<SendIcon />}
            >
              Submit
            </Button>
          )}
          {isPending && (
            <Button disabled startIcon={<SendIcon />} variant="outlined">
              Submitting...
            </Button>
          )}
        </CheckTerm>
        
        {/* <input
            type="checkbox"
            name="agreement"
            onChange={handleChange}
          ></input> */}
        {/* <div className="agree-check" id="agree-check">
          <input
            type="checkbox"
            name="agreement"
            onChange={handleChange}
          ></input><span>I Agree with Terms & Conditions</span>
        </div> */}
      </form>
    </Box>
  );
};

export default IdeaCreate;
