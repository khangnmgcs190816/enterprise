import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchFunction from "../../components/Search/SearchFunction";
// import EnhancedTable from "./EmployeeTable";
import CreateStaffBtn from "../../components/Staff/StaffButtons";
import EmployeeTable from "./EmployeeTable";
import { Box, Divider } from "@mui/material";

const Employees = () => {
  // const searchParams = useSearchParams();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          m: 3,
          paddingRight: "3rem",
        }}
      >
        <SearchFunction page="employees"></SearchFunction>
        <CreateStaffBtn />
      </Box>

      <EmployeeTable></EmployeeTable>
      {/* <EnhancedTable></EnhancedTable> */}
    </Box>
  );
};

export default Employees;
