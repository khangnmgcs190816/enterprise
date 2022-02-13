import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "rsuite";
// import PermanentDrawerLeft from "./PermanentDrawerLeft";
import "./styles.less";

const activeStyle = {
  color: "green",

}

const inactiveStyle = {
  color: "black"
}

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
          <NavLink to="/"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>Home</NavLink>
          <NavLink to="/idea"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>Ideas</NavLink>
          <NavLink to="/employees"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>Employees</NavLink>
          <NavLink to="/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>Dashboard</NavLink>
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
