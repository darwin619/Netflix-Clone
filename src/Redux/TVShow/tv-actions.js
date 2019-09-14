import TVActionTypes from "./tv-types";
import { fetchData, fetchAdditionalTVData } from "../../Services/TvShowService";
import { fetchTvShowsGrid } from "../../Services/TvShowGridService";

export const getTvShowsSuccess = () => ({
  type: TVActionTypes.SET_TV_DATA_SUCCESS
});

export function getTvShows() {
  return dispatch => {
    fetchData().then(data => {
      const TVData = data.map(({ results }) => results);
      var newArray = Array.prototype.concat.apply([], TVData);
      dispatch({
        type: TVActionTypes.SET_TV_DATA,
        payload: newArray
      });
    });
    fetchTvShowsGrid().then(data => {
      const TVGridData = data.map(({ results }) => results[0]);
      var newArray = Array.prototype.concat.apply([], TVGridData);
      dispatch({
        type: TVActionTypes.SET_TV_GRID_DATA,
        payload: newArray
      });
      dispatch(getTvShowsSuccess());
    });
  };
}

export function getAdditionalTVData(id) {
  return dispatch => {
    fetchAdditionalTVData(id).then(data => {
      dispatch({ type: TVActionTypes.SET_TV_ADDITIONAL_DATA, payload: data });
    });
  };
}
