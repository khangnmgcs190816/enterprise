import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import TextField from '@mui/material/TextField';

// import { colourOptions } from 'react-form';

const IdeaHeading = styled('h3')({
  textAlign: 'center',
});

const Terms = styled('div')({
  textAlign: 'justify',
  fontSize: 18,
  padding: '0rem 1rem 0rem 1rem'
});

const CheckBox = styled('div')({
  fontWeight: 'bold',
  textAlign: 'center'

})

const IdeaFrame = styled('div')({
  margin: '3rem',
  border: 'solid gray 1px',
  padding: '2rem',
  borderRadius: 10,
  width: '100%'
});

const IdeaCreate = () => {
  //title, user, content, thumbsup thumbsdown, academic year, document, craeted at, update at,
  // close date,category, comment
  var date = new Date();
  // const [title, setTitle] = useState({ title: "Title", user: "Thy", etc.});

  const [title, setTitle] = useState("Title");
  const [user, setUser] = useState("thy");
  const [content, setContent] = useState("Content");
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
    <IdeaFrame className="ideacreate">
      <Box sx={
        {
          color: 'blue',
          textAlign: 'center',
          fontSize: 36,
          fontWeight: 'bold',
          marginBottom: '1rem'
        }
      }>
        Create idea
      </Box>
      <Divider></Divider>
      {/* {comment.map((comment) => (
                <div className="comment-preview" key={comment.id}>
                    <h2>{comment.content}</h2>
                </div>
            ))} */}
      <form onSubmit={handleSubmit}>
        <div>
          <TextField id="outlined-basic"
            type="text"
            label="Title"
            variant="outlined"
            name="title"
            placeholder={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <br />

        <div>
          <TextField id="outlined-basic"
            variant="outlined"
            disabled
            type="text"
            name="user"
            placeholder={user}
            defaultValue="thy"
            onChange={(e) => setUser(e.target.value)} />
        </div>
        <br />

        <div>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={4}
            defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{
              width: '42rem'
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

        <div>
          {/* Chỉ hiện Year chứ không cần input */}
          <label>Academic Year: </label>
          <TextField id="outlined-basic"
            disabled
            variant="outlined"
            type="datetime"
            name="academicyear"
            placeholder={academic_year}
            onChange={(e) => setAcademicyear(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Upload</label>
          <input
            type="file"
            accept="file/*"
            id="contained-button-file"
            placeholder={document}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          ></input>
        </div>
        {isFilePicked ? (
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
        )}

        <div>
          {/* Ẩn luôn, chỉ hiện trên BE */}
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
        {/* 
                <div>
                    <label>Update </label>
                    <input disabled type="text" name="update" placeholder={updated_at} onChange={e => setUpdateDate(e.target.value)} />
                </div>
                <br/> */}

        <div>
          {/* Chỉ hiện */}
          <label>Close Date </label>
          <input
            type="text"
            name="closedate"
            placeholder={closed_date}
            onChange={(e) => setCloseDate(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Tags</label>
          <Select
            class="tag"
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

        {/* Terms and Conditions */}
        <div className="term-conditions">
          <IdeaHeading>
            Terms and Conditions
          </IdeaHeading>
          <Terms>
            Et natus molestias et doloribus. Quis quae enim dolores dolores
            aperiam ullam eaque. Eveniet aut et qui alias consequuntur expedita
            consequatur aspernatur. Qui est ut modi aut ut. Non est dolor ipsum
            numquam doloribus deserunt molestiae et animi. Voluptatem sint fuga
            est eum.
          </Terms>
        </div>
        <br />
        <CheckBox>
          <input
            type="checkbox"
            name="agreement"
            onChange={handleChange}
          ></input>
          I Agree with Terms & Conditions
        </CheckBox>
        {/* <div className="agree-check" id="agree-check">
          <input
            type="checkbox"
            name="agreement"
            onChange={handleChange}
          ></input><span>I Agree with Terms & Conditions</span>
        </div> */}
        <br />
        {!isPending && <button disabled={isDisabled()}>Submit</button>}
        {isPending && <button disabled>Submitting...</button>}
      </form>
    </IdeaFrame>
  );
};

export default IdeaCreate;
