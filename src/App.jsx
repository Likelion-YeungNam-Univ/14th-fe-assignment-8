import { useState, useEffect } from "react";
import fetchMovies from "./fetchMovies";

export default function MovieApp() {
  // 1. 상태(State) 관리
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = fetchMovies();
    setMovies(data);

    setIsLoading(false);
  }, []);

  const handleAddToList = (movie, listType) => {
    setMovies((prev) => prev.filter((m) => m.id !== movie.id));

    if (listType === "watched") {
      setWatchedMovies((prev) => [...prev, movie]);
    } else if (listType === "toWatch") {
      setToWatchMovies((prev) => [...prev, movie]);
    }
  };

  const handleRemoveFromList = (movie, listType) => {
    if (listType === "watched") {
      setWatchedMovies((prev) => prev.filter((m) => m.id !== movie.id));
    } else if (listType === "toWatch") {
      setToWatchMovies((prev) => prev.filter((m) => m.id !== movie.id));
    }

    setMovies((prev) => {
      const updatedList = [...prev, movie];
      return updatedList.sort((a, b) => a.id - b.id);
    });
  };

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <h2> 잠시만 기다려주세요.</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h2>시청한 영화 </h2>
        <div style={styles.listBuckets}>
          {watchedMovies.map((movie) => (
            <div key={movie.id} style={styles.card}>
              <h3>{movie.title}</h3>
              <button onClick={() => handleRemoveFromList(movie, "watched")}>
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 가운데: 메인 영화 목록 */}
      <div
        style={{
          ...styles.section,
          flex: 2,
          borderLeft: "2px solid #ccc",
          borderRight: "2px solid #ccc",
        }}
      >
        <h2> movies list</h2>
        <div style={styles.movieGrid}>
          {movies.map((movie) => (
            <div key={movie.id} style={styles.movieItem}>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <div style={styles.btnGroup}>
                <button onClick={() => handleAddToList(movie, "watched")}>
                  시청한 영화 담기
                </button>
                <button onClick={() => handleAddToList(movie, "toWatch")}>
                  볼 영화 담기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽: 볼 영화 목록 */}
      <div style={styles.section}>
        <h2>볼 영화 목록</h2>
        <div style={styles.listBuckets}>
          {toWatchMovies.map((movie) => (
            <div key={movie.id} style={styles.card}>
              <h3>{movie.title}</h3>
              <button onClick={() => handleRemoveFromList(movie, "toWatch")}>
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
  section: { flex: 1, padding: "20px", overflowY: "auto", height: "100%" },
  movieGrid: { display: "flex", flexDirection: "column", gap: "15px" },
  movieItem: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  btnGroup: { display: "flex", gap: "10px", marginTop: "10px" },
  listBuckets: { display: "flex", flexDirection: "column", gap: "10px" },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #aaa",
    backgroundColor: "gray",
  },
};
