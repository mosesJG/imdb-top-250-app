import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'
import movies from '../../data/movies.json'

function MovieList() {
    return(
      <section className="movie-list"> 
       {movies.map((movie, index) => (
        <MovieCard
        key={movie.imdbID}
        movie={movie}
        rank={index + 1}
        />
       ))}
      </section>
    )
}

export default MovieList
