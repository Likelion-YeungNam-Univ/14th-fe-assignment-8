import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  onAddWatched,
  onAddFavorite,
}) => {
  return (
    <div className="flex-1 overflow-y-scroll [scrollbar-gutter:stable]">
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