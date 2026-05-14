import React, { useState, useEffect } from "react";
import MovieSection from "./MovieSection";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [later, setLater] = useState([]);
    const [loading, setLoading] = useState(true);

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
        const data = fetchMovies();

        setMovies(data);
        setLoading(false);
    }, []);

    const addWatched = (movie) => {
        setWatched((prev) => [...prev, movie]);
        setMovies((prev) => prev.filter((item) => item.id !== movie.id));
    };

    const addLater = (movie) => {
        setLater((prev) => [...prev, movie]);
        setMovies((prev) => prev.filter((item) => item.id !== movie.id));
    };

    const restore = (movie) => {
        setMovies((prev) =>
            [...prev, movie].sort((a, b) => Number(a.id) - Number(b.id))
        );
    };

    const removeWatched = (movie) => {
        setWatched((prev) => prev.filter((item) => item.id !== movie.id));
        restore(movie);
    };

    const removeLater = (movie) => {
        setLater((prev) => prev.filter((item) => item.id !== movie.id));
        restore(movie);
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="rounded-xl bg-white px-10 py-6 text-3xl font-bold shadow">
                    Loading...
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 flex flex-col bg-white">
            <header className="shrink-0 bg-neutral-700 py-8">
                <h1 className="text-center text-4xl font-bold text-white">
                    Movie List
                </h1>
            </header>

            <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.5fr_1fr] gap-8 bg-white px-8 py-7">
                <MovieSection
                    title="시청한 영화 목록"
                    movies={watched}
                    type="selected"
                    emptyText=""
                    remove={removeWatched}
                />

                <MovieSection
                    movies={movies}
                    type="main"
                    emptyText="영화 목록이 없습니다."
                    addWatched={addWatched}
                    addLater={addLater}
                />

                <MovieSection
                    title="볼 영화 목록"
                    movies={later}
                    type="selected"
                    emptyText=""
                    remove={removeLater}
                />
            </div>
        </div>
    )
}

export default MovieList