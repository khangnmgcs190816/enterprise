import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// import "../index.css";

// import { colourOptions } from 'react-form';

const IdeaCreate = () => {
  //title, user, content, thumbsup thumbsdown, academic year, document, craeted at, update at,
  // close date,category, comment
  const [title, setTitle] = useState("Title");
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("Content");
  const [thumbsup, setThumbsup] = useState(null);
  const [thumbsdown, setThumbsdown] = useState(null);
  const [academicyear, setAcademicyear] = useState("Academic year");
  const [createDate, setCreateDate] = useState("Create Date");
  const [updateDate, setUpdateDate] = useState(null);
  const [closeDate, setCloseDate] = useState("Close Date");
  const [tag, setTag] = useState("Select");
  const [agree, setAgree] = useState(false);
  const animatedComponents = makeAnimated();
  const options = [
    { value: "tag1", label: "Tag1" },
    { value: "tag2", label: "Tag2" },
    { value: "tag3", label: "Tag3" },
  ];

  return (
    <div className="ideacreate">
      <h2>Create idea</h2>
      <form>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Content</label>
          <input
            className="idea-content"
            type="textarea"
            name="content"
            placeholder="content"
            rows="4"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Tags</label>
          <Select
            class="tag"
            name="tag"
            closeMenuOnSelect={false}
            placeholder={tag}
            components={animatedComponents}
            isMulti
            options={options}
          />
          {/* //custom add more tags */}
        </div>

        <br />
        <div>
          <label>Upload</label>
          <input
            type="file"
            accept="image/*"
            id="contained-button-file"
          ></input>
        </div>

        {/* Terms and Conditions */}
        <div>
          <h3>Terms and Conditions</h3>
          <div className="term-conditions">
            Et natus molestias et doloribus. Quis quae enim dolores dolores
            aperiam ullam eaque. Eveniet aut et qui alias consequuntur expedita
            consequatur aspernatur. Qui est ut modi aut ut. Non est dolor ipsum
            numquam doloribus deserunt molestiae et animi. Voluptatem sint fuga
            est eum.
          </div>
        </div>
        <br />

        <div className="agree-check">
          <input
            type="checkbox"
            name="agreement"
            onChange={(e) => setAgree(e.target.value)}
          />
          I Agree with Terms & Conditions
        </div>

        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default IdeaCreate;
