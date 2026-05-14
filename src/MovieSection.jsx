import React from "react";
import MovieCard from "./MovieCard";

const MovieSection = ({
    title,
    movies,
    type,
    emptyText,
    addWatched,
    addLater,
    remove,
}) => {
    return (
        <section className="flex min-h-0 flex-col bg-neutral-100 px-2 py-5">
            <h2 className="mb-4 text-center text-3xl font-bold">
                {title}
            </h2>

            <div className="min-h-0 flex-1 overflow-y-scroll pr-2">
                {movies.length === 0 ? (
                    <p className="text-center text-gray-400">{emptyText}</p>
                ) : (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            type={type}
                            addWatched={addWatched}
                            addLater={addLater}
                            remove={remove}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

export default MovieSection