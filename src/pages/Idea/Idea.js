import React, { Component } from "react";
import IdeaList from "../../components/Idea/IdeaList";
import NavBar from "../../components/NavBar/NavBar";
import IdeaCreate from "../../components/NavBar/NavBar";
// import IdeaList from "./pages/IdeaList/IdeaList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class Idea extends Component {
  render() {
    return (
      <div>
        <IdeaList />
        <IdeaCreate />
      </div>
    );
  }
}
