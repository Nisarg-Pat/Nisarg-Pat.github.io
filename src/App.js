import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./components/HomeScreen";


function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path={"/"} element={<HomeScreen/>}/>
                <Route path={"/home"} element={<HomeScreen/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
