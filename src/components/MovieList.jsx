import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  onAddWatched,
  onAddFavorite,
}) => {
  return (
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
  );
};

export default MovieList;