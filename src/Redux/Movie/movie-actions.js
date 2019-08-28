import MovieActionTypes from './movie-types';
import {fetchData,fetchAdditionalMovieData} from '../../Services/MovieService';
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

export function getAdditionalMovieData(id) {
  return (dispatch) => {
    fetchAdditionalMovieData(id).then(data => {
      dispatch({ type: MovieActionTypes.SET_MOVIE_ADDITIONAL_DATA, payload: data });
    });
  }
}