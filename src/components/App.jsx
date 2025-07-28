// 5. src/components/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Directors from "../pages/Directors";
import Actors from "../pages/Actors";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
    </>
  );
}

export default App;


