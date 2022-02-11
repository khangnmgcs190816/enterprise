import React from "react";
import { Navbar, Nav, Dropdown } from "rsuite";
import "./styles.less";

const NavBar = () => {
  return (
    <div>
      {/*

        VYPNK 8 Feb 2022
        package: npm i rsuite --save

        */}

      <Navbar>
        <Navbar.Brand href="/login">Login</Navbar.Brand>

        {/* Main nav */}
        <Nav>
          <Nav.Item href="/dashboard">Dashboard</Nav.Item>
          <Nav.Item href="/employees">Employees</Nav.Item>
          <Nav.Item href="/idea">Ideas</Nav.Item>
        </Nav>

        {/* Align right dropdown */}
        <Nav pullRight>
          <Dropdown title="Welcome, ">
            <Dropdown.Item href="#">Log out</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  );
};
export default NavBar;
