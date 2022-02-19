import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("department");
  const handleDepartment = () => {
    setActiveTab("department");
  };
  const handleCategory = () => {
    // update the state to tab2
    setActiveTab("category");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "department" ? "active" : ""}
          onClick={handleDepartment}
        >
          Department
        </li>
        <li
          className={activeTab === "category" ? "active" : ""}
          onClick={handleCategory}
        >
          Category
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "department" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;