import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);        
  const [watched, setWatched] = useState([]);       
  const [toWatch, setToWatch] = useState([]);       
  const [isLoading, setIsLoading] = useState(true); 

  const fetchMovies = () => {
    const movies = [];
    for (let i = 1; i <= 2500; i++) {
      movies.push({
        id: `${i}`,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
      });
    }
    alert("데이터를 가져오는 중입니다...");
    return movies;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = fetchMovies();
      setMovies(data);
      setIsLoading(false); 
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAddWatched = (movie) => {
    setWatched([...watched, movie]);
    setMovies(movies.filter((m) => m.id !== movie.id)); 
  };

  const handleAddToWatch = (movie) => {
    setToWatch([...toWatch, movie]);
    setMovies(movies.filter((m) => m.id !== movie.id)); 
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-4xl font-bold animate-bounce">🎬 로딩 중입니다...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full h-16 bg-gray-800 text-white font-bold text-3xl flex items-center justify-center shadow-md">
        Movie List
      </div>

      <div className="flex h-screen gap-x-4 p-4">
        <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto border-1">
          <h2 className="text-2xl font-bold text-center mb-4">시청한 영화 목록</h2>
          <ul className="space-y-2 justify-between">
            {watched.map(m => <li key={m.id} className="p-2 bg-white shadow rounded text-center">{m.title}</li>)}
          </ul>
        </div>

        <div className="w-2/4 p-4 overflow-y-auto bg-white">
          <div className="space-y-4">
            {movies.map((movie) => (
              <div key={movie.id} className="border-2 border-black p-3 text-center">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-gray-600 mb-2">{movie.description}</p>
                <div className="flex justify-center gap-2">
                  <button 
                    onClick={() => handleAddWatched(movie)}
                    className="bg-gray-400 px-3 py-1 border border-black hover:bg-gray-400 transition"
                  >
                    시청한 영화 담기
                  </button>
                  <button 
                    onClick={() => handleAddToWatch(movie)}
                    className="bg-gray-400 px-3 py-1 border border-black hover:bg-gray-400 transition"
                  >
                    볼 영화 담기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto border-1">
          <h2 className="text-2xl font-bold text-center mb-4">볼 영화 목록</h2>
          <ul className="space-y-2">
            {toWatch.map(m => <li key={m.id} className="p-2 bg-white shadow rounded text-center">{m.title}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieList;