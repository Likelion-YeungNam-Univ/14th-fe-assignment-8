const MovieCard = ({
  movie,
  onAddWatched,
  onAddFavorite,
}) => {
  return (
    <div className="border w-full mx-auto bg-white p-5 text-center">
      <h2 className="text-2xl font-bold
">
        {movie.title}
      </h2>

      <p className="my-3">
        {movie.description}
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() =>
            onAddWatched(movie)
          }
          className="border px-3 py-1 bg-gray-300 hover:bg-gray-400"
        >
          시청한 영화 담기
        </button>

        <button
          onClick={() =>
            onAddFavorite(movie)
          }
          className="border px-3 py-1 bg-gray-300 hover:bg-gray-400"
        >
          볼 영화 담기
        </button>
      </div>
    </div>
  );
};

export default MovieCard;