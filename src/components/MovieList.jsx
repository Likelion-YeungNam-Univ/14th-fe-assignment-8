import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onAddMovie }) => {
  return (
    <div className="flex flex-1 max-w-[1200px] overflow-y-scroll overflow-x-hidden">
      <ul className="flex flex-col w-full gap-2">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onAddMovie={onAddMovie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
