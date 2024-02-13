import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({MovieData}) => {
  console.log('MovieData',MovieData)
  return (
    <div>
      <div className="ba7dha_b3adhhom">
      {
        MovieData.map((el)=>         <MovieCard movie={el}    /> )
      }
      </div>
    </div>
  )
}

export default MovieList
