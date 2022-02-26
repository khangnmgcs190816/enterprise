import { Axios } from "axios";
import React, { useState, useEffect } from "react";

export default function Category(props) {
  const url = "";
  const [CategoryList, setCategory] = useState([]);
  const [data, setData] = useState({
    categoryname: "",
    description: "",
  });

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        // console.log(res.data)
        setCategory(res.data);
      })
      .catch((err) => console.error(err));
  });

  function remove(id) {
    console.log(id);
    Axios.delete(url + id)
      .then((res) => {
        console.log(res.data);
        const myalldata = CategoryList.filter((item) => item.categoryId !== id);
        setCategory(myalldata);
      })
      .catch((err) => console.error(err));
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, data).then((res) => {
      console.log(res.data);
      const mydata = [...CategoryList, res.data];
      setCategory(mydata);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function Update(id) {
    console.log(id);
    props.history.push("/Update/" + id);
  }

  const display = CategoryList.map((item) => (
    <tr key={item.categoryId}>
      <td>{item.categoryname}</td>
      <td>{item.description}</td>
      <td>
        <button
          onClick={() => Update(item.categoryId)}
          className="btn btn-success"
        >
          Update
        </button>
      </td>
      <td>
        <button
          onClick={() => remove(item.categoryId)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

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

      <table className="table table-stripped">
        <tbody>{display}</tbody>
      </table>
    </div>
  );
}
