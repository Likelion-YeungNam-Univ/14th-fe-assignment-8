import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import SidebarList from './SidebarList';
import Header from './Header';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [toWatch, setToWatch] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovies = () => {
        const data = [];
        for (let i = 1; i <= 2500; i++) {
        data.push({ id: `${i}`, title: `Movie ${i}`, description: `Description for Movie ${i}` });
        }
        alert("데이터를 가져오는 중입니다...");
        return data;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
        setMovies(fetchMovies());
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

    const handleDeleteWatched = (movie) => {
        setWatched(watched.filter((m) => m.id !== movie.id));
        setMovies(prevMovies => {
            const updateMovies = [...prevMovies, movie];
            return updateMovies.sort((a, b) => Number(a.id) - Number(b.id));
        })
    };

    const handleDeleteToWatch = (movie) => {
        setMovies(prevMovies => {
            const updateMovies = [...prevMovies, movie];
            return updateMovies.sort((a, b) => Number(a.id) - Number(b.id));
        });
        setToWatch(toWatch.filter((m) => m.id !== movie.id));
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
      <Header title="Movie List" />
      
      <div className="flex h-screen gap-x-4 p-4">
        <SidebarList 
          title="시청한 영화 목록" 
          list={watched} 
          onDelete={handleDeleteWatched} 
        />

        <div className="w-2/4 p-4 overflow-y-auto bg-white border">
          <div className="space-y-4">
            {movies.map(movie => (
              <MovieItem 
                key={movie.id} 
                movie={movie} 
                onWatched={handleAddWatched} 
                onToWatch={handleAddToWatch} 
              />
            ))}
          </div>
        </div>

        <SidebarList 
          title="볼 영화 목록" 
          list={toWatch} 
          onDelete={handleDeleteToWatch} 
        />
      </div>
    </div>
  );
};

export default MovieList;