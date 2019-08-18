import MovieActionTypes from './movie-types';
import {fetchData} from '../../Services/MovieService';
import {fetchGrid} from '../../Services/MovieGridService';

export function getMovies() {
  return (dispatch) => {
    fetchData().then(data => {
      const movieData = data.flatMap(({ results }) => results);
      dispatch({ type: MovieActionTypes.SET_MOVIE_DATA, payload: movieData });
    });
  }
}

export function getMovieGrid() {
  return (dispatch) => {
    fetchGrid().then(data => {
      const movieGridData = data.flatMap(({ results }) => results[0]);
      dispatch({ type: MovieActionTypes.SET_MOVIE_GRID_DATA, payload: movieGridData });
    });
  }
}