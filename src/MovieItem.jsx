import React from 'react'

const MovieItem = ({movie, Add}) => {
  return (
    <li className="flex flex-col items-center border-2 p-3 mb-3">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>

        <div className="mt-2 flex gap-2">
            <button 
            onClick = {()=> Add(movie, "watched")}
            className="border px-2 py-1 bg-stone-300"
            >시청한 영화 담기</button>
            
            <button onClick = {()=> Add(movie, "will")}
            className="border px-2 py-1 bg-stone-300"    
            >볼 영화 담기</button>
        </div>
    </li>
  )
}

export default MovieItem