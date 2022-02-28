import React from "react";
import { useSearchParams } from "react-router-dom";
// import NavBar from "../../components/Header/NavBar";
import SearchFunction from "../../components/Search/SearchFunction";
import EnhancedTable from "./EmployeeTable";
import CreateStaffBtn from "../../components/Staff/StaffButtons";
import EmployeeTable from "./EmployeeTable";

const Employees = () => {
  // const searchParams = useSearchParams();

  return (
    <div>
      <SearchFunction page="employees"></SearchFunction>
      <CreateStaffBtn />

      <EmployeeTable></EmployeeTable>
      {/* <EnhancedTable></EnhancedTable> */}
    </div>
  );
};

export default Employees;

