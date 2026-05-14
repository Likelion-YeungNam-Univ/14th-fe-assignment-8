import React from "react";
import Movie from "./MovieList";
import fetchMovies from "./fetchMovies.jsx";
import MovieList from "./components/MovieList"; 
const App = () => {
  return (
      <div>
        <fetchMovies MovieList={<Movie />} />
      </div>
  );
};

export default App;