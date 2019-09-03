import UserActionTypes from './user-types';

const INITIAL_STATE = {
	currentUser: null,
	snap: false
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UserActionTypes.SET_CURRENT_USER: 
		return {
			...state,
			currentUser: action.payload
		};
		case UserActionTypes.SET_SNAP: 
		return {
			...state,
			snap: !state.snap
		};
		default:
		return state;
	}
}

export default userReducer;