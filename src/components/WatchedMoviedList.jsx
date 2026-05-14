const WatchedMovieList = ({ watchedMovies }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-5 overflow-y-scroll">
      <h2 className="text-3xl font-bold mb-5">
        시청한 영화 목록
      </h2>

      <div className="flex flex-col gap-2">
        {watchedMovies.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </div>
  );
};

export default WatchedMovieList;