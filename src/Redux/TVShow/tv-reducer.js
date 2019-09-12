import TVActionTypes from "./tv-types";

const INITIAL_STATE = {
  isFetching: true,
  tvItems: [],
  tvGridItems: [],
  tvCast: [],
  tvVideos: ""
};

const TVReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TVActionTypes.SET_TV_DATA: {
      return { ...state, tvItems: payload };
    }
    case TVActionTypes.SET_TV_GRID_DATA: {
      return { ...state, tvGridItems: payload };
    }
    case TVActionTypes.SET_TV_DATA_SUCCESS: {
      return { ...state, isFetching: false };
    }
    case TVActionTypes.SET_TV_ADDITIONAL_DATA: {
      return {
        ...state,
        tvCast: payload.credits.cast,
        tvVideos: payload.videos.results.length
          ? payload.videos.results[0].key
          : "no_trailer_found"
      };
    }
    default:
      return state;
  }
};

export default TVReducer;
