import TVActionTypes from "./tv-types";
import { fetchData, fetchAdditionalTVData } from "../../Services/TvShowService";
import { fetchTvShowsGrid } from "../../Services/TvShowGridService";

export const getTvShowsSuccess = () => ({
  type: TVActionTypes.SET_TV_DATA_SUCCESS
});

export function getTvShows() {
  return dispatch => {
    fetchData().then(data => {
      const TVData = data.flatMap(({ results }) => results);
      dispatch({ 
        type: TVActionTypes.SET_TV_DATA, 
        payload: TVData 
      });
    });
    fetchTvShowsGrid().then(data => {
      const TVGridData = data.flatMap(({ results }) => results[0]);
      dispatch({ 
        type: TVActionTypes.SET_TV_GRID_DATA, 
        payload: TVGridData 
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
