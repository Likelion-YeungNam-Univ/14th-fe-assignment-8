// MovieList.jsx
import React, { useState, useEffect } from "react";
import fetchMovies from "./fetchMovies";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // 오래 걸리는 작업이라고 가정
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(fetchMovies());
        }, 2000); // 2초 후 데이터 가져오기
      });

      setMovies(data);
      setLoading(false);
    };

    loadData();
  }, []);

  // 로딩 중 화면
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-4xl font-bold">
        Loading...
      </div>
    );
  }

  // 로딩 끝난 후 화면
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-600">
        Movie List
      </h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;