import { useEffect, useState } from "react";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import WatchedMovieList from "./components/WatchedMoviedList.jsx";
import FavoriteMovieList from "./components/FavoriteMovieList";

import fetchMovies from "./fetchMovies";

function App() {
  const [movies, setMovies] = useState([]);

  const [watchedMovies, setWatchedMovies] =
    useState([]);

  const [favoriteMovies, setFavoriteMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();

      setMovies(data);

      setLoading(false);
    };

    loadMovies();
  }, []);

  const addWatchedMovie = (movie) => {
    setWatchedMovies([
      ...watchedMovies,
      movie,
    ]);
  };

  const addFavoriteMovie = (movie) => {
    setFavoriteMovies([
      ...favoriteMovies,
      movie,
    ]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
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
        />

        <MovieList
          movies={movies}
          onAddWatched={addWatchedMovie}
          onAddFavorite={addFavoriteMovie}
        />

        <FavoriteMovieList
          favoriteMovies={favoriteMovies}
        />
      </main>
    </div>
  );
}

export default App;