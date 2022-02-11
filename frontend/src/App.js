import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Idea from "./pages/Idea/Idea";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employee/Employees";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
// import IdeaList from "./components/Idea/IdeaList";
import IdeaCreate from "./components/Idea/IdeaCreate";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* // TODO 1: when not authenticated, no NavBar */}
          {/* // TODO 2: when authenticated, go to main page */}
          {/* <Route path="/" element={<Login />}></Route>{" "} */}
          <Route path="/" element={<Idea />}></Route>
          {/* Set main page as Login */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/idea" element={<Idea />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/idea/idealist" element={<IdeaList />}></Route> */}
          <Route path="/idea/ideacreate" element={<IdeaCreate />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
