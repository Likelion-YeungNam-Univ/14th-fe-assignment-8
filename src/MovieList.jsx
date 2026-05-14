import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [wishMovies, setWishMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchMovies = () => {
    const movies = [];

    console.log("2500개의 영화 목록 가져오는 중...");

    for (let i = 1; i <= 2500; i++) {
      movies.push({
        //'id: '${i}' 영화 번호 저장
        id: `${i}`,
        title: `Movie ${i}`,
        description: `Description for Movie ${i}`,
      });
    }

    alert("데이터를 가져오는 중입니다...");

    return movies;
  };
//useEffect( () => { ... }, [] ) : 컴포넌트가 처음 렌더링될 때 한 번 실행되는 함수
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const data = fetchMovies();

      setMovies(data);
      setLoading(false);   //1초 후 로딩 끝냄
    }, 1000);
  }, []);

  // 시청한 영화 담기
  const addWatchedMovie = (movie) => {
    setWatchedMovies((prev) => [movie,...prev]);
 //[movie, ...prev] : 최신순, [...prev, movie]: 오래된 순
      prev.filter((item) => item.id !== movie.id)
      //item.id !== movie.id: 현재 선택한 영화가 id가 다른 것만 남김
    ;
  };

  // 볼 영화 담는 기능
  const addWishMovie = (movie) => {
    setWishMovies((prev) => [movie,...prev]);

    setMovies((prev) =>
      prev.filter((item) => item.id !== movie.id)
    );
  };

  // 다시 영화 목록으로 복구하는 기능
  const restoreMovie = (movie, type) => {
    if (type === "watched") {
      setWatchedMovies((prev) =>
        prev.filter((item) => item.id !== movie.id)
      );
    } else {
      setWishMovies((prev) =>
        prev.filter((item) => item.id !== movie.id)
      );
    }

    setMovies((prev) =>
      [movie, ...prev].sort(
        (a, b) => Number(a.id) - Number(b.id)
        //
      )
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-5xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-200">
     
      <header className="h-24 bg-stone-700 text-white flex justify-center items-center">
        <h1 className="text-5xl font-bold">
          Movie List
        </h1>
      </header>

      
      <main className="flex gap-5 p-6 h-[calc(100vh-96px)]">
        
        <section className="w-[22%] bg-gray-300 p-5">
          <h2 className="text-3xl font-bold text-center mb-5">
            시청한 영화 목록
          </h2>

          <div className="overflow-y-scroll h-full">
            {watchedMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white border border-gray-500 p-3 mb-3 text-center"
              >
                <p className="mb-2 font-semibold">
                  {movie.title}
                </p>

                <button
                  onClick={() =>
                    restoreMovie(movie, "watched")
                  }
                  className="bg-red-400 px-3 py-2 rounded"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </section>

        
        <section className="flex-1 bg-gray-100 p-5">
          <div className="overflow-y-scroll h-full">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="border-2 border-gray-700 bg-white p-5 mb-4 text-center"
              >
                <h3 className="text-2xl mb-2">
                  {movie.title}
                </h3>

                <p className="mb-4">
                  {movie.description}
                </p>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() =>
                      addWatchedMovie(movie)
                    }
                    className="bg-blue-300 px-4 py-2 rounded"
                  >
                    시청한 영화 담기
                  </button>

                  <button
                    onClick={() =>
                      addWishMovie(movie)
                    }
                    className="bg-green-300 px-4 py-2 rounded"
                  >
                    볼 영화 담기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

       
        <section className="w-[22%] bg-gray-300 p-5">
          <h2 className="text-3xl font-bold text-center mb-5">
            볼 영화 목록
          </h2>

          <div className="overflow-y-scroll h-full">
            {wishMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white border border-gray-500 p-3 mb-3 text-center"
              >
                <p className="mb-2 font-semibold">
                  {movie.title}
                </p>

                <button
                  onClick={() =>
                    restoreMovie(movie, "wish") //movie: 어떤 영화인지 전달, "wish": 볼 영화 목록에서 삭제하는 건지 알려줌
                  }
                  className="bg-red-400 px-3 py-2 rounded"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MovieList;