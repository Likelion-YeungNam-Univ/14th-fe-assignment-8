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
      <div id="Header" className="h-30 bg-amber-950 flex justify-center items-center">
        <div className="text-white text-4xl font-bold">Movie List</div>
      </div>
    </div>
  )
};

export default App;
