import React, { useState } from "react";

const Dropdown = ({ list }) => {
  const [department, setDepartment] = useState('Select')

  const departmentList = [
    'Math',
    'Science',
    'Biology',
    'IT',
    'Business'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(department)
  }
  const handleChange = (e) => {
    setDepartment(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Viewed by:
        <select value={department} onChange={handleChange}>
          <option key={department} value="Select" hidden>Select</option>
          {
            departmentList.map((department) =>
              <option key={department} value={department}>{department}</option>
            )
          }
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}



export default Dropdown;
