import React from "react";

import {Profile} from "./components/profile";
import Home from "./components/Home";
import About from "./components/About";
import {FunFact} from "./components/FunFact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className="app">
    <BrowserRouter>
      <Routes>    
      <Route path = "/" element= {<Home/>}/>
      <Route path="/profile" element={<Profile />} /> 
      <Route path = "/about" element= {<About/>}/>
      <Route path="/funfacts" element={<FunFact />} /> 
      </Routes>
    </BrowserRouter>
  </div>
     
       
  );
}

export default App;
