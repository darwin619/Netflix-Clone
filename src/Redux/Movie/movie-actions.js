import MovieActionTypes from "./movie-types";
import {
  fetchData,
  fetchAdditionalMovieData
} from "../../Services/MovieService";
import { fetchGrid } from "../../Services/MovieGridService";

export const getMoviesSuccess = () => ({
  type: MovieActionTypes.SET_MOVIE_DATA_SUCCESS
});

export function getMovies() {
  return dispatch => {
    fetchData().then(data => {
      const movieData = data.map(({ results }) => results);
      var newArray = Array.prototype.concat.apply([], movieData);
      console.log(data);
      console.log(newArray);
      dispatch({
        type: MovieActionTypes.SET_MOVIE_DATA,
        payload: newArray
      });
    });
    fetchGrid().then(data => {
      const movieGridData = data.map(({ results }) => results[0]);
      var newArray = Array.prototype.concat.apply([], movieGridData);
      dispatch({
        type: MovieActionTypes.SET_MOVIE_GRID_DATA,
        payload: newArray
      });
      dispatch(getMoviesSuccess());
    });
  };
}

export const getMoviesAdditionalSuccess = () => ({
  type: MovieActionTypes.SET_MOVIE_ADDITIONAL_DATA_SUCCESS
});

export function getAdditionalMovieData(id) {
  return dispatch => {
    fetchAdditionalMovieData(id).then(data => {
      dispatch({
        type: MovieActionTypes.SET_MOVIE_ADDITIONAL_DATA,
        payload: data
      });
      dispatch(getMoviesAdditionalSuccess());
    });
  };
}
