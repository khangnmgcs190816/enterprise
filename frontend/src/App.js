import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, orange, blue, red, green } from "@mui/material/colors";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Idea from "./pages/Idea/Idea";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employee/Employees";
import "./App.css";
import IdeaCreate from "./components/Idea/IdeaCreate";
import Search from "./components/Search/SearchFunction";

import Home from "./pages/Home";
import Header from "./components/Header/Header";
import CategoryCreate from "./components/CategoryCreate";
import Comments from "./components/Comment/Comments";
import IdeaDetails from "./components/Idea/IdeaDetails";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#66bb6a",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#f44336",
      contrastText: "#FFFFFF",
    },
    badge: {
      main: "#f44336",
      contrastText: "#FFFFFF",
    },
    whiteIcon: {
      main: "#FFFFFF",
    },
    secondary: {
      main: grey[400],
      contrastText: "grey[600]",
    },
    typography: {
      logout: {
        color: "#f44336",
      },
      button: {
        color: green[500],
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header></Header>

          <main>
            <Routes>
              {/* // TODO 1: when not authenticated, no NavBar */}
              {/* // TODO 2: when authenticated, go to main page */}
              {/* <Route path="/" element={<Login />}></Route>{" "} */}
              <Route path="/" element={<Home />} />

              <Route path="/ideas" element={<Idea />} />
              <Route path="/ideas/:id" element={<IdeaDetails />} />
              <Route path="/ideas/:category" element={<Idea />} />
              <Route path="/ideas/:filter" element={<Idea />} />

              <Route path="/employees" element={<Employees />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/idea/idealist" element={<IdeaList />}></Route> */}

              <Route path="/ideas/ideacreate" element={<IdeaCreate />} />

              <Route path="/categories" element={<CategoryCreate />} />
              {/* <Route path="/your-ideas" element={}></Route> */}
              <Route path="/search" element={<Search />} />

              <Route path="/login" element={<Login />} />
              <Route path="/comments" element={<Comments />} />
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;