import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function UpdateEmployee(props) {
  const url = "";
  //   const [CategoryList, setCategory] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(url + id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  });

  function submit(e) {
    e.preventDefault();
    const id = props.match.params.id;
    Axios.put(url + id, data)
      .then((res) => {
        console.log(res.data);
        props.history.push("/");
      })
      .catch((err) => console.error(err));
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <div className="container">
      <form onSubmit={(e) => submit(e)}>
        <div class="form-group">
          <label htmlFor=""></label>
          <input
            onChange={(e) => handle(e)}
            value={data.categoryname}
            type="text"
            name="categoryname"
            id="categoryname"
            className="form-control"
            placeholder="Category Name"
          />
        </div>
        <div class="form-group">
          <label htmlFor=""></label>
          <input
            onChange={(e) => handle(e)}
            value={data.description}
            type="text"
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
          />
        </div>
        <button className="btn-btn-primary">Submit</button>
      </form>
    </div>
  );
}
