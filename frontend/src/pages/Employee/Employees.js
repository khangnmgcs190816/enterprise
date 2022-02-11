import React from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";

const Employees = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <NavBar />
      <Search page="employees"></Search>
      <h1>Employee</h1>
    </div>
  );
};

export default Employees;
