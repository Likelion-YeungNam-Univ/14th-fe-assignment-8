import React, { useState, useEffect } from "react";


const App = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [movieToWatchs, setMovieToWatchs] = useState([]);

  const fetchMovies = () => {
    const movies = [];

    alert("데이터를 가져오는 중입니다...");

    for (let i = 1; i <= 2500; i++) {
      movies.push({
        id: `${i}`,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
      });
      console.log("2500개의 영화 목록 가져오는 중...");
    }

    return movies;
  };


  const addWatchedMovie = (selectMovie) => {

    setWatchedMovies((prev) => [...prev, selectMovie])

    setMovies((prev) => 
      prev.filter((movie) => movie.id !== selectMovie.id)
    )
  }

  const addMovieToWatch = (selectMovie) => {

    setMovieToWatchs((prev) => [...prev, selectMovie])

    setMovies((prev) => 
      prev.filter((movie) => movie.id !== selectMovie.id)
    )
  }

  const DeleteMovie = (selectMovie) => {
    
    setWatchedMovies((prev) => 
      prev.filter((movie) => movie.id !== selectMovie.id)
    )

    setMovieToWatchs((prev) => 
      prev.filter((movie) => movie.id !== selectMovie.id)
    )

    setMovies((prev) => (
      [...prev, selectMovie].sort((a, b) => Number(a.id) - Number(b.id))
    ))
  }

  useEffect(() => {
    setIsloading(true);

    setTimeout(() => {
      const movieList = fetchMovies();
      setMovies(movieList);
      setIsloading(false);
    }, 500)

  }, [])

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-6xl font-black">Loading...</div>
      </div>
    )
  }
  
  return (
    <div className="h-screen">
      <div id="Header" className="h-[150px] bg-amber-950 flex justify-center items-center">
        <div className="text-white text-5xl font-bold">Movie List</div>
      </div>

      <div id="Container">
        <div className="px-5 py-10">
          <div className="flex justify-between">
            <div id="WatchedMovies" className="w-[370px] h-[700px] min-h-screen bg-gray-300 overflow-y-scroll">
              <div className="p-5 flex justify-center">
                <div className="text-2xl font-bold">시청한 영화 목록</div>
              </div>

              {watchedMovies.map((movie) => (
                <div key={movie.id} className="w-[370px] border-2 p-3 mb-2 border-black text-center flex justify-between">
                  <div className="font-black flex items-center">
                    {movie.title}
                  </div>
                  <button type='button' onClick={() => DeleteMovie(movie)} id="WatchedDelete" className="bg-gray-300 border-1 p-1">삭제</button>
                </div>
              ))}
            </div>

            <div id="MovieList" className="w-[450px] h-[700px] bg-gray-500 overflow-y-scroll p-4">
              {movies.map((movie) => (
                <div key={movie.id} className="bg-white border-2 p-2 mb-3 border-black text-center">
                  <div className="font-black">
                    {movie.title}
                  </div>
                  <div>
                    {movie.description}
                  </div>
                  <div className="flex justify-around">
                    <button type='button' onClick={() => addWatchedMovie(movie)} id="WatchedPut" className="bg-gray-300 border-1 p-1">시청한 영화 담기</button>
                    <button type='button' onClick={() => addMovieToWatch(movie)} id="MovieToWatchPut" className="bg-gray-300 border-1 p-1">볼 영화 담기</button>
                  </div>
                </div>
              ))}
            </div>

            <div id="MovieToWatch" className="w-[370px] h-[700px] min-h-screen bg-gray-300 overflow-y-scroll">
              <div className="p-5 flex justify-center">
                <div className="text-2xl font-bold">볼 영화 목록</div>
              </div>
              {movieToWatchs.map((movie) => (
                <div key={movie.id} className="w-[370px] border-2 p-3 mb-2 border-black text-center flex justify-between">
                  <div className="font-black flex items-center">
                    {movie.title}
                  </div>
                  <button type='button' onClick={() => DeleteMovie(movie)} id="ToWatchDelete" className="bg-gray-300 border-1 p-1">삭제</button>
                </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default App;
