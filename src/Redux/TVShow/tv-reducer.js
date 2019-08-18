import TVActionTypes from './tv-types';

const INITIAL_STATE = {
  tvItems: [],
  tvGridItems: []
};

const TVReducer = (state = INITIAL_STATE, action) => {
	 const { type, payload } = action;
	  switch (type) {
	    case TVActionTypes.SET_TV_DATA : {
	      return { ...state, tvItems: payload };
	    }
	     case TVActionTypes.SET_TV_GRID_DATA : {
	      return { ...state, tvGridItems: payload };
	    }
	    default: 
      	  return state 
   }
}

export default TVReducer;