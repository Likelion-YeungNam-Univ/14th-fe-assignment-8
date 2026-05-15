import React from 'react';

const MovieItem = ({ movie, onWatched, onToWatch }) => (
  <div className="border-2 border-black p-3 text-center bg-white shadow-sm">
    <h3 className="text-xl font-semibold">{movie.title}</h3>
    <p className="text-gray-600 mb-2">{movie.description}</p>
    <div className="flex justify-center gap-2">
      <button 
        onClick={() => onWatched(movie)}
        className="bg-gray-400 px-3 py-1 border border-black hover:bg-gray-500 transition text-sm"
      >
        시청한 영화 담기
      </button>
      <button 
        onClick={() => onToWatch(movie)}
        className="bg-gray-400 px-3 py-1 border border-black hover:bg-gray-500 transition text-sm"
      >
        볼 영화 담기
      </button>
    </div>
  </div>
);

export default MovieItem;