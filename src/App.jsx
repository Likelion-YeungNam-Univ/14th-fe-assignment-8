import { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieSideBar from './components/MovieSideBar';

const App = () => {
  // 영화 목록
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [willWatchMovies, setWillWatchMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  // 영화 추가 함수
  const handleAddMovie = (movie, type) => {
    const setTarget =
      type === 'watched' ? setWatchedMovies : setWillWatchMovies;

    setTarget((prev) => {
      const alreadyExists = prev.some((m) => m.id === movie.id);
      if (alreadyExists) return prev;

      return [...prev, movie].sort((a, b) => a.id - b.id);
    });
  };

  // 영화 삭제 함수
  const handleRemoveMovie = (movie, type) => {
    const setTarget =
      type === 'watched' ? setWatchedMovies : setWillWatchMovies;

    setTarget((prev) => {
      return prev.filter((m) => m.id !== movie.id);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const generatedMovies = [];

      for (let i = 1; i <= 2500; i++) {
        generatedMovies.push({
          id: `${i}`,
          title: `Movie ${i}`,
          description: `Description for Movie ${i}`,
        });
      }

      alert('데이터를 가져오는 중입니다...');

      setMovies(generatedMovies);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex justify-center items-center h-screen text-3xl font-bold">
          데이터를 가져오는 중입니다...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-row flex-1 mt-4 overflow-y-hidden">
        <MovieSideBar
          type="watched"
          movies={watchedMovies}
          onRemoveMovie={handleRemoveMovie}
        />
        <MovieList movies={movies} onAddMovie={handleAddMovie} />
        <MovieSideBar
          type="willWatch"
          movies={willWatchMovies}
          onRemoveMovie={handleRemoveMovie}
        />
      </div>
    </div>
  );
};

export default App;
