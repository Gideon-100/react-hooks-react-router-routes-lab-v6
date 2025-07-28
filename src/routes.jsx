// src/routes.jsx
import React from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="movie/:id" element={<Movie />} />
    <Route path="directors" element={<Directors />} />
    <Route path="actors" element={<Actors />} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Route>
);

export default routes;




