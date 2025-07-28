// 6. src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>Movies</NavLink>
      <NavLink to="/directors" className={({ isActive }) => (isActive ? "active" : "")}>Directors</NavLink>
      <NavLink to="/actors" className={({ isActive }) => (isActive ? "active" : "")}>Actors</NavLink>
    </div>
  );
}

export default NavBar;






