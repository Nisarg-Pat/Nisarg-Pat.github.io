import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import ProjectsScreen from "./components/ProjectsScreen";
import ExperienceScreen from "./components/ExperienceScreen";


function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <div className={"row"}>
                <div className={"col-2"}/>
                <div className={"col-8"}>
                    <Routes>
                        <Route path={"/"} element={<HomeScreen/>}/>
                        <Route path={"/about"} element={<HomeScreen/>}/>
                        <Route path={"/experience"} element={<ExperienceScreen/>}/>
                        <Route path={"/projects"} element={<ProjectsScreen/>}/>
                    </Routes>
                </div>
                <div className={"col-2"}/>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
