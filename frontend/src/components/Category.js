import React from 'react'
import { useState } from "react";
const Category = () => {
  var [category, setCategory] = useState([]);
  const [id, setId]=useState();
  const [tag, setTag]=useState();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = {
      id,
      tag
    };

    setIsPending(true);

    fetch("http://localhost:8080/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(idea),
    }).then(() => {
      console.log(idea);
      console.log("new category added");
      setIsPending(false);
    });
  };
  return (
    <form  onSubmit={handleSubmit}>
      <div>Category
        <textarea id="outlined-basic"
              variant="outlined"
              type="text"
              name="user"
              placeholder={category}
              onChange={(e) => setCategory(e.target.value)}/>
      </div>
      { !isPending && <button >Submit</button>}
      { isPending && <button disabled>Submitting...</button>}
    </form>
  )
}

export default Category;