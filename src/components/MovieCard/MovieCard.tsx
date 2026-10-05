import './MovieCard.css'
import type { Movie } from '../../types/movie'

interface MovieCardProps {
  movie: Movie
  rank: number
}

function MovieCard({movie,rank}: MovieCardProps){
  return(
    <article className="movie-card">
      <img 
        className="movie-card__poster"
        src={movie.Poster} 
        alt={`${movie.Title} poster`}
      />

      <div className="movie-card__info">
        <span className="movie-card__rank">#{rank}</span>
        <h3 className="movie-card__title">{movie.Title}</h3>
        <p className="movie-card__year">{movie.Year}</p>
        <p className="movie-card__rating">★{movie.imdbRating}</p>
      </div>
    </article>
  )
}

export default MovieCard
