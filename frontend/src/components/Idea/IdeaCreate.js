import styled from "@emotion/styled";
import {Box, Divider} from "@mui/material";
import {useEffect, useState} from "react";
import Select from "react-select";
import {InputLabel} from "@mui/material";
import makeAnimated from "react-select/animated";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {lightBlue, grey} from "@mui/material/colors";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// Mới tạo IdeaButtons.js trong Idea(components), chứa 3 function một cái là dạng link Back, cái thứ 2 là nút Cancel, 3 là nút Create Idea
import {ReturnLink, CancelBtn} from "./IdeaButtons";

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

// const getAllCategories = async () => {
//     const response = await axios.get(`http://localhost:8000/categories`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//     );
//     console.log(response);
// };

const IdeaCreate = () => {
    var date = new Date();
    const [title, setTitle] = useState("Title");
    const [owner, setUser] = useState("thy");
    const [anonymous, setAnonymous] = useState(false);
    const [content, setContent] = useState("Please input your idea");
    const [thumbsUp, setThumbsUp] = useState();
    const [thumbsDown, setThumbsDown] = useState();
    const [academicYear, setAcademicyear] = useState("Academic year");
    const [documents, setSelectedFile] = useState([]);
    const [document, setDocument] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [createdAt, setCreateDate] = useState(date);
    const [updatedAt, setUpdateDate] = useState();
    const [closedDate, setCloseDate] = useState();
    const [categories, setSelectedTag] = useState([]);
    const [isTagPicked, setIsTagPicked] = useState(false);
    const [comments, setComment] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [isBusy, setBusy] = useState(true)


    const options = [
        {value: "0", label: "A"},
        {value: "1", label: "A"}
    ]



    const animatedComponents = makeAnimated();



    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const [boxes, setBoxes] = useState({});

    function handleChange(e) {
        const {
            target: {id, checked},
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
        const {length} = Object.values(boxes).filter(Boolean);
        return length !== 1;
    }

    // const selectHandler = (event) =>{
    //     setSelectedTag(event.target.value[0]);
    //     setIsTagPicked(true);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const idea = {
            title,
            content,
            anonymous,
            thumbsUp,
            thumbsDown,
            academicYear,
            documents,
            closedDate,
            categories,
            comments,
            owner,
        };

        setIsPending(true);


        await axios.post("http://localhost:8000/ideas", JSON.stringify(idea), {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE2M2EzZTM2ZDAxMTEyMTAxZTljZGMiLCJpYXQiOjE2NDU2MjM5MjgsImV4cCI6MTY0NjIyODcyOH0.zI2IZd9E_RHs16_bAR7vYoAfpmaf0NZzVnG2YXYPMHY"
            }
        }).then(async (response) => {

            console.log(`${JSON.stringify(response.data._id)}`);
            if (document != null) {
                console.log(document);
                const url = await sendDocument(response.data._id, document.name);
                console.log(`Document URL: ${url}`);
            }

            console.log("Idea added");
            setIsPending(false);
        });
    };


    const sendDocument = async (ideaId, fileName) => {
        const data = new FormData();
        data.append("document", document);

        try {
            const response = await axios.post(`http://localhost:8000/uploadS3?ideaId=${ideaId}&fileName=${fileName}`, data)

            if (response.status >= 200 && response.status <= 300) {
                return response.data;
            }
        } catch (e) {
            console.log(e);
        }
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
                margin: "2rem 3rem",
                padding: "2rem",
                maxWidth: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <ReturnLink/>
                <TitleFrame>Create idea</TitleFrame>
                <Box sx={{alignSelf: "center"}}>
                    {/* Label section for displaying datetime data */}
                    <LabelStyle>
                        Closure date:
                        {closedDate != null ? " " + {closedDate} : " No data"}
                    </LabelStyle>

                </Box>
            </Box>

            <divider
                sx={{
                    marginBottom: "1.5rem",
                }}
            />



            <form onSubmit={handleSubmit}>
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
                <br/>


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
                <br/>
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
                            placeholder={documents}
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        <Button color={"primary"} variant="text" component="span">
                            <PhotoCamera/>
                            Upload Photo
                        </Button>
                    </InputLabel>
                    <InputLabel id="attach-label">
                        <Button color={"primary"} variant="text" component="span">
                            <input
                                type="file"
                                accept="file/*"
                                id="contained-button-file"
                                color={"primary"}
                                placeholder={documents}
                                onChange={event => {
                                    const file = event.target.files[0];
                                    setDocument(file);
                                }}
                            />
                            <AttachFileIcon/> Attachments
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

                {/* Tag/CategoryCreate section with customed Label */}
                <div>
                    <InputLabel id="tag-label">Select or create new tags</InputLabel>
                    <Select
                        labelId="tag-label"
                        name="tag"
                        closeMenuOnSelect={false}
                        placeholder={categories}
                        isClearable
                        components={animatedComponents}
                        isMulti
                        options={options}
                        onChange={(e) => {

                            setSelectedTag(Array.isArray(e) ? e.map((x) => {
                                return {category: x.label}
                            }) : [])
                        }
                        }
                    />
                    {/* //custom add more tags */}
                    {/* <center>
            {" "}
            The selected tag: <h3>{category}</h3>
          </center> */}
                </div>
                <br/>

                {/* Terms and Conditions with overflow content not yet finished */}
                <div className="term-conditions">
                    <TermHeading>Terms and Conditions</TermHeading>
                    <Terms>
                        <p>
                            Et natus molestias et doloribus. Quis quae enim dolores dolores
                            aperiam ullam eaque. Eveniet aut et qui alias consequuntur
                            expedita consequatur aspernatur.
                        </p>
                        <p>
                            Qui est ut modi aut ut. Non est
                            dolor ipsum numquam doloribus deserunt molestiae et animi.
                            Voluptatem sint fuga est eum.
                        </p>
                    </Terms>
                </div>
                <br/>

                {/* Checkbox for Terms and Submit button, should change Submitting... button by using LoadingButton */}
                <CheckTerm>
                    <div>
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="I Agree to Terms & Conditions"
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
                            startIcon={<SendIcon/>}
                            fullWidth
                            type='submit'>
                            Submit
                        </Button>
                    )}
                    {isPending && (
                        <Button
                            disabled
                            startIcon={<SendIcon/>}
                            variant="outlined"
                            fullWidth
                        >
                            Submitting...
                        </Button>
                    )}
                </CheckTerm>
                <CancelBtn/>

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
