import React from 'react';

const MovieSideBar = ({ type, onRemoveMovie, movies }) => {
  return (
    <div className="flex-1 bg-gray-200 overflow-y-auto">
      <p className="flex justify-center py-2 text-2xl font-bold text-center">
        {type === 'watched' ? '시청한 목록' : '볼 목록'}
      </p>
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex justify-between items-center border m-2 p-2 bg-white"
          >
            <p className="text-[16px] font-bold">{movie.title}</p>
            <button
              className="p-2 bg-gray-300 cursor-pointer hover:bg-gray-400"
              onClick={() => onRemoveMovie(movie, type)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSideBar;
