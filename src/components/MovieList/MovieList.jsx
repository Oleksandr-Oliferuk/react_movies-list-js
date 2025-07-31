import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movie }) => (
  <div className="page-content">
    <div className="movies">
      {movie.map(film => (
        <MovieCard film={film} key={film.imdbId} />
      ))}
    </div>
  </div>
);
