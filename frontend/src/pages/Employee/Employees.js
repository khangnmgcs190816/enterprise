import React from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/Header/NavBar";
import SearchFunction from "../../components/Search/SearchFunction";

const Employees = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <SearchFunction page="employees"></SearchFunction>
      <h1>Employee</h1>
    </div>
  );
};

export default Employees;
