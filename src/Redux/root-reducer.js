import { combineReducers } from 'redux';
import movieReducer from './Movie/movie-reducer';
import TVReducer from './TVShow/tv-reducer';






const rootReducer = combineReducers({
	movie: movieReducer,
	tv: TVReducer
});

export default rootReducer;