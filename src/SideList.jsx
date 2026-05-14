import React from 'react'

const SideList = ({title, items, type, Remove}) => {
  return (
    <div className="w-1/4 bg-stone-100 p-3">
        <h2 className="text-lg font-bold text-center mb-3">{title}</h2>

        {items.map((movie) => (
            <div key={movie.id} className="border bg-white p-2 mb-2 flex justify-between">
                <span className="font-bold">{movie.title}</span>
                <button onClick={()=>Remove(movie, type)} className="border text-xs bg-stone-300 px-2">삭제</button>
            </div>
        ))}
    </div>
  )
}

export default SideList