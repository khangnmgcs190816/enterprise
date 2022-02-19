import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Idea from "./pages/Idea/Idea";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employee/Employees";
import NavBar from "./components/Header/NavBar";
import "./App.css";
// import IdeaList from "./components/Idea/IdeaList";
import IdeaCreate from "./components/Idea/IdeaCreate";
import Search from "./components/Search/SearchFunction";

import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Category from "./components/Category";
import Comment from "./components/Comment/Comment";

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>

        <main>
          <Routes>
            {/* // TODO 1: when not authenticated, no NavBar */}
            {/* // TODO 2: when authenticated, go to main page */}
            {/* <Route path="/" element={<Login />}></Route>{" "} */}
            <Route path="/" element={<Home />}></Route>

            <Route path="/idea" element={<Idea />}></Route>
            <Route path="/idea/:category" element={<Idea />}></Route>
            <Route path="/idea/:filter" element={<Idea />}></Route>

            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            {/* <Route path="/idea/idealist" element={<IdeaList />}></Route> */}
            <Route path="/idea/ideacreate" element={<IdeaCreate />}></Route>

            <Route path="/category" element={<Category />}></Route>
            <Route path="/search" element={<Search />}></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/comment" element={<Comment />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
