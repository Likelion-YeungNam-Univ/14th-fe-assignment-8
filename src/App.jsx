import React, { useState, useEffect } from "react";
import { fetchMovies } from "./utils/fetchMovies";
import { MainCard, SideCard } from "./components/MovieItem";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [toWatch, setToWatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 조건: useEffect 내부에서 fetchMovies 호출
  useEffect(() => {
    setIsLoading(true);
    
    //setTimeout 사용: alert 전에 Loading UI가 화면에 보여지기 위해서
    const timer = setTimeout(() => {
      const data = fetchMovies();
      setMovies(data);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 영화 담기: 메인에서 제거 + 사이드에 추가
  const handleMoveToSide = (movie, type) => {
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));
    if (type === "watched") {
      setWatched((prev) => [...prev, movie]);
    } else {
      setToWatch((prev) => [...prev, movie]);
    }
  };

  // 삭제(복구): 사이드에서 제거 + 메인에 추가
  const handleRestore = (movie, from) => {
    if (from === "watched") {
      setWatched((prev) => prev.filter((m) => m.id !== movie.id));
    } else {
      setToWatch((prev) => prev.filter((m) => m.id !== movie.id));
    }

    setMovies((prev) => {
      const restoredList = [...prev, movie];
      // id 기준으로 오름차순 정렬
      return restoredList.sort((a, b) => a.id - b.id); //삭제되면 맨 위로
    });
  };

  // Loading 화면
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> 
        <h1 className="text-3xl font-bold animate-pulse text-black"> Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-500 text-white py-6 text-center">
        <h1 className="text-4xl tracking-tight">Movie List</h1>
      </header>

      {/* 제목 */}
      <main className="flex flex-row gap-6 p-6 flex-1 overflow-hidden">
        
        {/* 왼쪽 - 시청한 영화 목록 */}
        <section className="flex-1 bg-white p-4 rounded">
          <h2 className="text-xl font-bold text-center mb-6">시청한 영화 목록</h2>
          {watched.map(m => (
            <SideCard key={m.id} movie={m} onRemove={(movie) => handleRestore(movie, "watched")} />
          ))}
        </section>

        {/* 가운데 - 메인 영화 목록 */}
        <section className="flex-[1.5] bg-white p-4 border-gray-200">
          <div className="overflow-y-auto pr-2">
            {movies.map(m => (
              <MainCard 
                key={m.id} 
                movie={m} 
                onWatch={(movie) => handleMoveToSide(movie, "watched")}
                onToWatch={(movie) => handleMoveToSide(movie, "toWatch")}
              />
            ))}
          </div>
        </section>

        {/* 오른쪽- 볼 영화 목록 */}
        <section className="flex-1 bg-white p-4 border-gray-300">
          <h2 className="text-xl font-bold text-center mb-6">볼 영화 목록</h2>
          {toWatch.map(m => (
            <SideCard key={m.id} movie={m} onRemove={(movie) => handleRestore(movie, "toWatch")} />
          ))}
        </section>

      </main>
    </div>
  );
};

export default App;