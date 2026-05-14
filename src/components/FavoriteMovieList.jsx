const FavoriteMovieList = ({ favoriteMovies }) => {
  return (
    <div className="side-list">
      <h2>볼 영화 목록</h2>

      {favoriteMovies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
};

export default FavoriteMovieList;