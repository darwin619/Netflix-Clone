import SearchActionTypes from "./search-types";

const INITIAL_STATE = {
  searchItems: []
};

const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SearchActionTypes.SET_SEARCH_DATA: {
      return { ...state, searchItems: payload };
    }
    default:
      return state;
  }
};

export default searchReducer;
