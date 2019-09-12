import UserActionTypes from './user-types';

export const setCurrentUser = (user) => {
	return ({
		type: UserActionTypes.SET_CURRENT_USER,
		payload: user
	});
}

export const ToggleMenuHidden = () => {
	return ({
		type: UserActionTypes.TOGGLE_HIDDEN_MENU
	});
}