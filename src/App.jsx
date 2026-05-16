import React, { useState, useEffect } from "react";


const App = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);

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
            <div id="WatchedMovies" className="w-[370px] min-h-screen bg-gray-300">
              <div className="p-5 flex justify-center">
                <div className="text-2xl font-bold">시청한 영화 목록</div>
              </div>
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
                    <button className="bg-gray-300 border-1 p-1">시청한 영화 담기</button>
                    <button className="bg-gray-300 border-1 p-1">볼 영화 담기</button>
                  </div>
                </div>
              ))}
            </div>

            <div id="MovieToWatch" className="w-[370px] min-h-screen bg-gray-300">
              <div className="p-5 flex justify-center">
                <div className="text-2xl font-bold">볼 영화 목록</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default App;
