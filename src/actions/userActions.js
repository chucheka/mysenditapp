import {
	LOGIN_USER_LOADING,
	SIGNUP_USER_SUCCESS,
	SET_IS_NOT_AUTHENTICATED,
	SIGNUP_USER_LOADING,
	SIGNUP_USER_FAILURE,
	SET_CURRENT_USER,
	LOGOUT_USER
} from '../constants/types';

export const loginUserLoading = () => ({
	type: LOGIN_USER_LOADING
});
export const loginSuccess = (user) => ({
	type: SET_CURRENT_USER,
	payload: user
});

export const loginFailure = (error) => ({
	type: SET_IS_NOT_AUTHENTICATED,
	payload: error
});

export const logout = () => ({
	type: LOGOUT_USER
});

export const signupUserLoading = () => ({
	type: SIGNUP_USER_LOADING
});

export const signupUserSuccess = (user) => ({
	type: SIGNUP_USER_SUCCESS
});

export const signupUserFailure = (error) => ({
	type: SIGNUP_USER_FAILURE
});
