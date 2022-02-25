import React from "react";
import { useSearchParams } from "react-router-dom";
// import NavBar from "../../components/Header/NavBar";
import SearchFunction from "../../components/Search/SearchFunction";
import EnhancedTable from "./EmployeeTable";

const Employees = () => {
  // const searchParams = useSearchParams();

  return (
    <div>
      <SearchFunction page="employees"></SearchFunction>
      {/* <EmployeeTable></EmployeeTable> */}
      {/* <EnhancedTable></EnhancedTable> */}
    </div>
  );
};

export default Employees;

// A list of all employees
//   - Records / CRUD
//   + Employee ID
//     + First Name
//       + Last Name
//         + Role
//         + Department
//         + Email
//         + Phone number
