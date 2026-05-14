const WatchedMovieList = ({
  watchedMovies,
  onRemoveWatched,
}) => {
  return (
    <div className="w-1/4 bg-white p-5">
      <h2 className="flex justify-center text-3xl font-bold mb-5">
        시청한 영화 목록
      </h2>
      <div className="h-[70vh] overflow-y-scroll">
      <div className="flex flex-col gap-3">
        {watchedMovies.map((movie) => (
          <div
            key={movie.id}
            className="border p-3 flex justify-between items-center"
          >
            <p>{movie.title}</p>

            <button
              onClick={() =>
                onRemoveWatched(movie)
              }
              className="mt-2 border px-2 py-1 bg-gray-300 hover:bg-gray-400"
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

export default WatchedMovieList;