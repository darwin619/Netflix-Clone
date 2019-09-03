import UserActionTypes from './user-types';

export const setCurrentUser = (user) => {
	return ({
		type: UserActionTypes.SET_CURRENT_USER,
		payload: user
	});
}

export const setSnap = () => {
	return ({
		type: UserActionTypes.SET_SNAP
	});
}