import React from 'react';

const MovieItem = ({ movie, onAddMovie }) => {
  const buttonStyle =
    'border bg-gray-300 p-2 text-1xl hover:bg-gray-400 hover:shadow-lg cursor-pointer';

  return (
    <li className="border-2 text-center py-2">
      <p>{movie.title}</p>
      <p>{movie.description}</p>
      <div className="flex justify-center gap-4">
        <button
          className={buttonStyle}
          onClick={() => onAddMovie(movie, 'watched')}
        >
          시청한 영화 담기
        </button>
        <button
          className={buttonStyle}
          onClick={() => onAddMovie(movie, 'willWatch')}
        >
          볼 영화 담기
        </button>
      </div>
    </li>
  );
};

export default MovieItem;
