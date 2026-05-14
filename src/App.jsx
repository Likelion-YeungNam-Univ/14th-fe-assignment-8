import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import WatchedMovieList from "./components/WatchedMoviedList.jsx";
import FavoriteMovieList from "./components/FavoriteMovieList.jsx";

import fetchMovies from "./fetchMovies";

function App() {
  const [movies, setMovies] = useState([]);

  const [watchedMovies, setWatchedMovies] =
    useState([]);

  const [favoriteMovies, setFavoriteMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // 영화 불러오기
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const data = await new Promise(
        (resolve) => {
          setTimeout(() => {
            resolve(fetchMovies());
          }, 2000);
        }
      );

      setMovies(data);

      setLoading(false);
    };

    loadData();
  }, []);

  // 시청한 영화 담기
  const addWatchedMovie = (movie) => {
    setWatchedMovies([
      ...watchedMovies,
      movie,
    ]);

    setMovies(
      movies.filter(
        (item) => item.id !== movie.id
      )
    );
  };

  // 볼 영화 담기
  const addFavoriteMovie = (movie) => {
    setFavoriteMovies([
      ...favoriteMovies,
      movie,
    ]);

    setMovies(
      movies.filter(
        (item) => item.id !== movie.id
      )
    );
  };

  // 시청 목록 삭제
  const removeWatchedMovie = (movie) => {
    setWatchedMovies(
      watchedMovies.filter(
        (item) => item.id !== movie.id
      )
    );

    const updatedMovies = [...movies, movie];

    updatedMovies.sort(
      (a, b) => Number(a.id) - Number(b.id)
    );

    setMovies(updatedMovies);
  };

  // 볼 목록 삭제
  const removeFavoriteMovie = (movie) => {
    setFavoriteMovies(
      favoriteMovies.filter(
        (item) => item.id !== movie.id
      )
    );

    const updatedMovies = [...movies, movie];

    updatedMovies.sort(
      (a, b) => Number(a.id) - Number(b.id)
    );

    setMovies(updatedMovies);
  };

  // 로딩 화면
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-5xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <main className="flex gap-5 p-5 h-[85vh]">
        <WatchedMovieList
          watchedMovies={watchedMovies}
          onRemoveWatched={
            removeWatchedMovie
          }
        />

        <MovieList
          movies={movies}
          onAddWatched={addWatchedMovie}
          onAddFavorite={addFavoriteMovie}
        />

        <FavoriteMovieList
          favoriteMovies={favoriteMovies}
          onRemoveFavorite={
            removeFavoriteMovie
          }
        />
      </main>
    </div>
  );
}

export default App;