import UserActionTypes from './user-types';

const INITIAL_STATE = {
	currentUser: null,
	hidden: true
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UserActionTypes.SET_CURRENT_USER: 
		return {
			...state,
			currentUser: action.payload
		};
		case UserActionTypes.TOGGLE_HIDDEN_MENU: 
		return {
			...state,
			hidden: !state.hidden
		};
		default:
		return state;
	}
}

export default userReducer;