import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import ProjectsScreen from "./components/ProjectsScreen";
import ExperienceScreen from "./components/ExperienceScreen";


function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path={"/"} element={<HomeScreen/>}/>
                <Route path={"/home"} element={<HomeScreen/>}/>
                <Route path={"/experience"} element={<ExperienceScreen/>}/>
                <Route path={"/projects"} element={<ProjectsScreen/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
