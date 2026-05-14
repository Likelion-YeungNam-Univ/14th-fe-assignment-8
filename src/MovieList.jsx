import React, { useState, useEffect } from "react";
import fetchMovies from "./fetchMovies";
import MovieItem from "./MovieItem";
import SideList from "./SideList";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watched, setWatched] = useState([]);
  const [willWatch, setWillWatch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const data = fetchMovies();
      setMovies(data);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleAddMovie = (movie, type) => {
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));

    if (type === "watched") {
      setWatched((prev) => [...prev, movie]);
    } else {
      setWillWatch((prev) => [...prev, movie]);
    }
  };

  const handleRemoveMovie = (movie, type) => {
    if (type === "watched") {
      setWatched((prev) => prev.filter((m) => m.id !== movie.id));
    } else {
      setWillWatch((prev) => prev.filter((m) => m.id !== movie.id));
    }

    setMovies((prev) => [...prev, movie].sort((a, b) => a.id - b.id));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-4 bg-stone-700 text-white">
        Movie List
      </h1>

      {isLoading ? (
        <p className="flex justify-center items-center h-screen font-bold text-5xl">Loading...</p>
      ) : (
        <div className="flex gap-4 p-4 h-screen">
          {/* 왼쪽 */}
          <SideList
            title="시청한 영화 목록"
            items={watched}
            type="watched"
            Remove={handleRemoveMovie}
          />

          {/* 가운데 */}
          <div className="w-2/4 h-full overflow-auto">
            <ul>
              {movies.map((movie) => (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  Add={handleAddMovie}
                />
              ))}
            </ul>
          </div>

          {/* 오른쪽 */}
          <SideList
            title="볼 영화 목록"
            items={willWatch}
            type="will"
            Remove={handleRemoveMovie}
          />
        </div>
      )}
    </div>
  );
};

export default MovieList;