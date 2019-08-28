import MovieActionTypes from './movie-types';

const INITIAL_STATE = {
  movieItems: [],
  movieGridItems: [],
  movieCast: [],
  movieVideos: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
	 const { type, payload } = action;
	  switch (type) {
	    case MovieActionTypes.SET_MOVIE_DATA : {
	      return { ...state, movieItems: payload };
	    }
	    case MovieActionTypes.SET_MOVIE_GRID_DATA : {
	      return { ...state, movieGridItems: payload };
	    }
	    case MovieActionTypes.SET_MOVIE_ADDITIONAL_DATA : {
	      return { ...state, movieCast: payload.credits.cast, movieVideos: payload.videos.results[0].key};
	    }

	    default: 
      	  return state 
   }
}

export default movieReducer;