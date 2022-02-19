import React from "react";
import PieChart from "../../components/PieChart";
import Dropdown from "./Dropdown";


const FirstTab = () => {
  return (
    <div className="FirstTab">
      <div>
        <h1>Department</h1>
        {/* View by: dropdown (Dept) */}
        <div>
          <Dropdown />
          <p>
            Closure Date: { } <button>Download (.csv)</button>
          </p>
        </div>
        <br />

        {/* Dynamic detail panel */}
        <div>
          {/* Number of ideas by employees who belongs in a department */}
          {/* <span>
          Ideas:
          {ideas.length}
        </span> */}
          <br />

          {/* Idea with most thumbs and comments in the department*/}
          <span>Most popular: N/A</span>
          <br />
          {
            //ideas.filter()
          }

          {/* Idea with most views within department*/}
          <span>Most views: N/A</span>
          <br />

          {/* Newest idea posted by user in this department */}
          <span>Latest idea: N/A</span>
          <br />

          {/* Newest comment in an idea of this department */}
          <span>Latest comment: N/A</span>
          <br />
        </div>

        <div>
          {/* <p>Total ideas: {ideas.length} </p> */}

          {/* Chart here */}
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default FirstTab;
