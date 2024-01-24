import React from "react";
import "./app.css";
import Login from "./components/LoginSignup/LoginSignup";
import Home from "./components/Pages/Home";
import Tasker from "./components/Pages/Tasker"
import Profile from "./components/Pages/sous-pages/Profile";
import Project from "./components/Pages/sous-pages/Project";
import Repport from "./components/Pages/sous-pages/Repport";
import Tasks from "./components/Pages/sous-pages/Tasks"
import { Route, Routes } from 'react-router-dom';




function App() {


  return (

    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tasker" element={<Tasker />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Repport" element={<Repport />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

    </div>

  );
}

export default App;
