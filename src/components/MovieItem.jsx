import React from 'react';

// 가운데 메인 목록
export const MainCard = ({ movie, onWatch, onToWatch }) => (
  <div className="border-2 border-black p-4 mb-4 text-center bg-white shadow-sm">
    <h4 className="text-lg font-bold">{movie.title}</h4>
    <p className="text-gray-600 mb-4">{movie.description}</p>
    <div className="flex justify-center gap-2">
      <button 
        onClick={() => onWatch(movie)}
        className="bg-gray-200 px-3 py-1 border border-gray-400 hover:bg-gray-300 transition-colors"
      >
        시청한 영화 담기
      </button>
      <button 
        onClick={() => onToWatch(movie)}
        className="bg-gray-200 px-3 py-1 border border-gray-400 hover:bg-gray-300 transition-colors"
      >
        볼 영화 담기
      </button>
    </div>
  </div>
);

// 좌우 사이드 목록
export const SideCard = ({ movie, onRemove }) => (
  <div className="flex justify-between items-center border border-gray-300 p-3 mb-2 bg-white">
    <span className="font-medium">{movie.title}</span>
    <button 
      onClick={() => onRemove(movie)}
      className="bg-gray-200 px-3 py-1 border border-gray-400 text-sm hover:bg-red-100 transition-colors"
    >
      삭제
    </button>
  </div>
);