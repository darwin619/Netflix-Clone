import SearchActionTypes from './search-types';
import {fetchSearchData} from '../../Services/SearchService';

export function getSearchData(value) {
  return (dispatch) => {
    fetchSearchData(value).then(data => {
      dispatch({ type: SearchActionTypes.SET_SEARCH_DATA, payload: data.results });
    });
  }
}