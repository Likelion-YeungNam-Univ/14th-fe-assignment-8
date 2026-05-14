const MovieCard = ({
  movie,
  onAddWatched,
  onAddFavorite,
}) => {
  return (
    <div className="border-2 p-5 bg-white text-center">
      <h3 className="text-2xl font-semibold">
        {movie.title}
      </h3>

      <p className="my-3">
        {movie.description}
      </p>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => onAddWatched(movie)}
          className="border px-3 py-1 hover:bg-gray-200"
        >
          시청한 영화 담기
        </button>

        <button
          onClick={() => onAddFavorite(movie)}
          className="border px-3 py-1 hover:bg-gray-200"
        >
          볼 영화 담기
        </button>
      </div>
    </div>
  );
};

export default MovieCard;