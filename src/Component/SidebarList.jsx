import React from 'react';

const SidebarList = ({ title, list, onDelete, bgColor = "bg-gray-200" }) => (
  <div className={`w-1/4 ${bgColor} p-4 overflow-y-auto border`}>
    <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
    <div className="space-y-2">
      {list.map(m => (
        <div key={m.id} className="flex justify-between items-center p-2 border bg-white shadow">
          <span className="text-lg font-medium">{m.title}</span>
          <button
            onClick={() => onDelete(m)}
            className="bg-gray-400 px-3 py-1 border border-black hover:bg-red-300 transition ml-2 text-xs"
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default SidebarList;