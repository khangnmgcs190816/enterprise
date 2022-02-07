import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Idea from "./pages/Idea/Idea";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employee/Employees";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/idea" element={<Idea />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
