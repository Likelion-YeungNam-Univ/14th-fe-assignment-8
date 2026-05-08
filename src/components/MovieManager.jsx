import React, { useState, useEffect } from "react";
import { fetchMovies } from "../data/fetchMovies";

const MovieManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [wanted, setWanted] = useState([]);

  const [visibleCount, setVisibleCount] = useState(100);

  const titleStyle = "text-[13px] text-gray-800 font-bold mb-1 mt-1";
  const descStyle = "text-[10px] text-gray-600 font-bold mb-1";
  const mainButtonStyle =
    "text-black text-[15px] border border-black bg-gray-400 hover:bg-gray-800 p-1";
  const cardStyle = "flex flex-col items-center border border-black";
  const cardParent = "flex flex-col gap-2";
  const leftRightCard = "flex flex-row justify-between border border-black p-3";
  const leftRightContainer =
    "flex flex-col w-1/4 bg-gray-100 border border-gray-300 p-5 gap-1 overflow-y-scroll";
  const leftRightHeader = "flex justify-center text-[20px] font-bold mb-3";

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = fetchMovies();
      setMovies(data);
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const moveMovie = (movie, from, to) => {
    if (from === "movies") {
      setMovies((prev) => prev.filter((m) => m.id !== movie.id));
    } else if (from === "watched") {
      setWatched((prev) => prev.filter((m) => m.id !== movie.id));
    } else if (from === "wanted") {
      setWanted((prev) => prev.filter((m) => m.id !== movie.id));
    }

    if (to === "watched") {
      setWatched((prev) => [...prev, movie]);
    } else if (to === "wanted") {
      setWanted((prev) => [...prev, movie]);
    } else if (to === "movies") {
      setMovies((prev) => {
        const updated = [...prev, movie];
        return updated.sort((a, b) => a.id - b.id);
      });
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    // 스크롤이 끝에 거의 다다랐을 때
    if (scrollHeight - scrollTop <= clientHeight + 50) {
      setVisibleCount((prev) => prev + 50);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold text-gray-700">
        Loading... 🎬
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-row bg-white m-5 p-3">
      <div className={leftRightContainer}>
        <div className={leftRightHeader}>시청한 영화 목록</div>
        <div className={cardParent}>
          {watched.map((m) => (
            <div key={"watched-" + m.id} className={leftRightCard}>
              <div className={titleStyle}>{m.title}</div>
              <button
                onClick={() => moveMovie(m, "watched", "movies")}
                className={mainButtonStyle}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-2/4 flex flex-col border border-gray-300 bg-gray-50 overflow-y-scroll gap-1"
        onScroll={handleScroll}
      >
        <div className="flex justify-center text-[20px] font-bold p-5 text-black">
          전체 영화 목록
        </div>
        {movies.slice(0, visibleCount).map((m) => (
          <div key={"movie-" + m.id} className={cardStyle}>
            <div className={titleStyle}>{m.title}</div>
            <div className={descStyle}>{m.description}</div>
            <div className="flex flex-row gap-2 items-center mb-2">
              <button
                onClick={() => moveMovie(m, "movies", "watched")}
                className={mainButtonStyle}
              >
                시청한 영화 담기
              </button>
              <button
                onClick={() => moveMovie(m, "movies", "wanted")}
                className={mainButtonStyle}
              >
                볼 영화 담기
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={leftRightContainer}>
        <div className={leftRightHeader}>볼 영화 목록</div>
        <div className={cardParent}>
          {wanted.map((m) => (
            <div key={"wanted-" + m.id} className={leftRightCard}>
              <div className={titleStyle}>{m.title}</div>
              <button
                onClick={() => moveMovie(m, "wanted", "movies")}
                className={mainButtonStyle}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieManager;
