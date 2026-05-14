import React from "react";

const MovieCard = ({ movie, type, addWatched, addLater, remove }) => {
    return (
        <div
            className={
                type === "main"
                    ? "mb-2 border-2 border-neutral-900 bg-white px-3 py-2 text-center"
                    : "mb-2 flex items-center justify-between border-2 border-neutral-900 bg-white px-3 py-3"
            }
        >
            {type === "main" ? (
                <>
                    <h3 className="text-2xl">{movie.title}</h3>
                    <p className="text-xl text-neutral-700">{movie.description}</p>

                    <div className="mt-1 flex justify-center gap-2">
                        <button
                            onClick={() => addWatched(movie)}
                            className="border border-neutral-800 bg-neutral-300 px-2 py-1 text-xl"
                        >
                            시청한 영화 담기
                        </button>

                        <button
                            onClick={() => addLater(movie)}
                            className="border border-neutral-800 bg-neutral-300 px-2 py-1 text-xl"
                        >
                            볼 영화 담기
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3 className="text-2xl font-bold">{movie.title}</h3>

                    <button
                        onClick={() => remove(movie)}
                        className="border border-neutral-800 bg-neutral-300 px-2 py-1 text-xl"
                    >
                        삭제
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieCard