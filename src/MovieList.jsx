import React, { useEffect, useState } from "react";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [watchedMovies, setWatchedMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

   useEffect(() => {
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

    setTimeout(() => {
      const data = fetchMovies();
      setMovies(data);
      setIsLoading(false); // 데이터를 다 가져오면 로딩 끝
    }, 100);

        fetchMovies();
    }, []);
    
    const handleAddWatched = (movie) => { // movie.title이 아니라 movie 객체 전체를 받습니다.
        if (!watchedMovies.find(m => m.id === movie.id)) {
            setWatchedMovies([...watchedMovies, movie]);
            setMovies(movies.filter((m) => m.id !== movie.id)); // 가운데서 제거
        }
    };

    const handleAddWatchList = (movie) => {
        if (!watchList.find(m => m.id === movie.id)) {
            setWatchList([...watchList, movie]);
            setMovies(movies.filter((m) => m.id !== movie.id)); // 가운데서 제거
        }
    };

    // 💡 3. 삭제 로직: 목록에서 지우고, 가운데 리스트로 다시 보낸 뒤 정렬합니다.
    const handleDeleteWatched = (movie) => {
        setWatchedMovies(watchedMovies.filter(m => m.id !== movie.id));
        const updatedMovies = [...movies, movie].sort((a, b) => Number(a.id) - Number(b.id));
        setMovies(updatedMovies);
    };

    const handleDeleteWatchList = (movie) => {
        setWatchList(watchList.filter(m => m.id !== movie.id));
        const updatedMovies = [...movies, movie].sort((a, b) => Number(a.id) - Number(b.id));
        setMovies(updatedMovies);
    };

    if (isLoading) {
        return <div className="text-center mt-20 text-2xl font-bold">로딩 중...</div>;
    }

    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-4xl font-extrabold text-red-600 mb-10 text-center tracking-tight">
          형주의 영화 목록
        </div>
        <div className="flex flex-row gap-10">  
          <div className="bg-gray-100 p-6 rounded-2xl mb-10 w-1/2">
            <p className="item-center justify-center font-bold"> 시청한 영화 목록</p>
            <div>
            {watchedMovies.length === 0 ? <p className="text-gray-400 text-center mt-4">목록이 비어있습니다.</p> : null}
            {watchedMovies.map((m) => (  
              <div key={m.id} className ="items-center justify-center flex flex-col gap-4 mt-4 text-gray-700 text-lg border border-gray-300 rounded-lg p-4">
                <p className="font-bold">Movie {m.id}</p>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={() => handleDeleteWatched(m)}>
                  삭제
                </button>
              </div>
            ))}  
            </div>
          </div>  
          <div className="items-center justify-center flex flex-col gap-8 mb-[10px]">
            {movies.map((movie) => (
              <div key={movie.id} className="items-center justify-center bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
                <div className="items-center justify-center">
                  <h3 className="text-xl font-bold">{movie.title}</h3>
                  <p className="text-gray-500 mt-1">{movie.description}</p>
                </div>
                              
                  {/* 🌟 추가된 버튼 영역 🌟 */}
                  <div className="mt-6 flex flex-row justify-end gap-2">
                    <button 
                      onClick={() => handleAddWatched(movie)}
                      className="w-full bg-blue-600 text-white py-2 px-4 font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      시청한 영화 담기
                    </button>
                    <button 
                      onClick={() => handleAddWatchList(movie)}
                      className="w-full bg-green-600 text-white py-2 px-4 font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      볼 영화 담기
                    </button>
                  </div>
              </div>
            ))}
            
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl mb-10 w-1/2">
            <p className="item-center justify-center font-bold"> 볼 영화 목록</p>
            <div className="flex flex-col gap-4 justify-center">
            {watchList.length === 0 ? <p className="text-gray-400 text-center">목록이 비어있습니다.</p> : null}
            {watchList.map((m) => (  
              <div key={m.id} className ="items-center justify-center flex flex-col gap-4 mt-4 text-gray-700 text-lg border border-gray-300 rounded-lg p-4">
                <p className="font-bold">Movie {m.id}</p>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={() => handleDeleteWatchList(m)}>
                  삭제
                </button>
              </div>
            ))}  
            </div>
          </div>  
        </div>  
      </div>
    );
};

export default MovieList;