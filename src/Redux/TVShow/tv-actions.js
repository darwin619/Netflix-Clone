import TVActionTypes from './tv-types';
import {fetchData, fetchAdditionalTVData} from '../../Services/TvShowService';
import {fetchTvShowsGrid} from '../../Services/TvShowGridService';

export function getTvShows() {
  return (dispatch) => {
    fetchData().then(data => {
      const TVData = data.flatMap(({ results }) => results);
      dispatch({ type: TVActionTypes.SET_TV_DATA, payload: TVData });
    });
  }
}

export function getTvShowsGrid() {
  return (dispatch) => {
    fetchTvShowsGrid().then(data => {
      const TVGridData = data.flatMap(({ results }) => results[0]);
      dispatch({ type: TVActionTypes.SET_TV_GRID_DATA, payload: TVGridData });
    });
  }
}

export function getAdditionalTVData(id) {
  return (dispatch) => {
    fetchAdditionalTVData(id).then(data => {
      dispatch({ type: TVActionTypes.SET_TV_ADDITIONAL_DATA, payload: data});
    });
  }
}