import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    </div>
  );
}

export default MovieCard;
