import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  onAddWatched,
  onAddFavorite,
}) => {
  return (
    <div
      className="
        h-[80vh]
        overflow-y-scroll

        scrollbar
        scrollbar-w-8
        scrollbar-thumb-red-500
        scrollbar-track-black
      "
    >
      <div className="flex flex-col gap-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddWatched={onAddWatched}
            onAddFavorite={onAddFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;