import { useState, useEffect } from "react";

const fetchMovies = () => {
  const movies = [];

  for (let i = 1; i <= 2500; i++) {
    movies.push({
      id: `${i}`,
      title: `Movie ${i}`,
      description: `Description for Movie ${i}`,
    });
    console.log("2500개의 영화 목록 가져오는 중...");
  }

  alert("데이터를 가져오는 중입니다...");

  return movies;
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const result = fetchMovies();
    setMovies(result);
    setIsLoading(false);
  }, []);

  const addToList = (movie, listType) => {
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));
    if (listType === "watched") {
      setWatchedMovies((prev) => [...prev, movie]);
    } else if (listType === "toWatch") {
      setToWatchMovies((prev) => [...prev, movie]);
    }
  }

  const removeFromList = (movie, listType) => {
    if (listType === "watched") {
      setWatchedMovies((prev) => prev.filter((m) => m.id !== movie.id));
    } else if (listType === "toWatch") {
      setToWatchMovies((prev) => prev.filter((m) => m.id !== movie.id));
    }
    setMovies((prev) => [...prev, movie].sort((a,b) => a.id - b.id));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center text-2xl font-bold p-4 border-b border-gray-300">
        Movie List
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <div className="w-48 border-r border-gray-300 p-4 overflow-y-auto">
          <div className="font-bold mb-3">시청한 영화 목록</div>
          {watchedMovies.map((movie) => (
            <div key={movie.id} className="flex justify-between items-center border border-gray-300 p-2 mb-2">
              <span>{movie.title}</span>
              <button onClick={() => removeFromList(movie, "watched")}>삭제</button>
            </div>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {movies.map((movie) => (
            <div key={movie.id} className="border border-gray-300 p-3 mb-2 text-center">
              <p>{movie.title}</p>
              <p className="text-gray-500 text-sm">{movie.description}</p>
              <button className="mr-2 border px-2 py-1" onClick={() => addToList(movie, "watched")}>
                시청한 영화 담기
              </button>
              <button className="border px-2 py-1" onClick={() => addToList(movie, "toWatch")}>
                볼 영화 담기
              </button>
            </div>
          ))}
        </div>

        <div className="w-48 border-l border-gray-300 p-4 overflow-y-auto">
          <div className="font-bold mb-3">볼 영화 목록</div>
          {toWatchMovies.map((movie) => (
            <div key={movie.id} className="flex justify-between items-center border border-gray-300 p-2 mb-2">
              <span>{movie.title}</span>
              <button onClick={() => removeFromList(movie, "toWatch")}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;