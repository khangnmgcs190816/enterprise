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
import Category from "./components/Category";
import Comment from "./components/Comment/Comment";

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
        color: '#f44336'
      },
      button: {
        color: green[500]
      }
    }
    // overrides: {
    //   MuiInput: {
    //     underline: {
    //       "&:hover:not($disabled):before": {
    //         backgroundColor: "rgba(0, 188, 212, 0.7)",
    //       },
    //     },
    //   },
    // },
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
    </ThemeProvider>
  );
}

export default App;
