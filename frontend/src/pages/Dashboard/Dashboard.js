import React, { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import { Dropdown } from "rsuite";

const Dashboard = () => {
  const url = "http://localhost:8080/idea";
  const [ideas, setIdeas] = useState([{ idea: 1, title: 'loading', content: 'loading' }]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const ideas = await res.json();
      setIdeas(ideas);
      console.log(ideas)
    }
    fetchData();
  }, [url])

  const list1 = [1, 23, 4, 7, 8, 9, 9];
  // list1.add(1);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* View by: dropdown (Dept) */}
      <div>
        <p>View By:
          <Dropdown title="Select a department">
            <Dropdown.Item href="#">Math</Dropdown.Item>
            <Dropdown.Item href="#">Biology</Dropdown.Item>
            <Dropdown.Item href="#">Chemistry</Dropdown.Item>
            <Dropdown.Item href="#">Physics</Dropdown.Item>
          </Dropdown>
        </p>
      </div>
      <br />

      {/* Dynamic detail panel */}
      <div>
        {/* Number of ideas by employees who belongs in a department */}
        <span>Ideas:
          {
            ideas.length
          }
        </span><br />

        {/* Idea with most thumbs and comments in the department*/}
        <span>Most popular: N/A</span><br />
        {
          //ideas.filter()
        }

        {/* Idea with most views within department*/}
        <span>Most views: N/A</span><br />

        {/* Newest idea posted by user in this department */}
        <span>Latest idea: N/A</span><br />

        {/* Newest comment in an idea of this department */}
        <span>Latest comment: N/A</span><br />
      </div>

      <div>
        <p>Total ideas: {ideas.length} </p>
        {/* Chart here */}
      </div>
      <div>
        {list1.map(item =>
          <h1>ehehe</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;


