import {
	SET_IS_AUTHENTICATED,
	SET_IS_NOT_AUTHENTICATED,
	SET_CURRENT_USER,
	LOGOUT_USER,
	SIGNUP_USER_LOADING,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAILURE,
	LOGIN_USER_LOADING
} from '../constants/types';
let initialState = {
	isLoading: false,
	isAuthenticated: false,
	currentUser: null,
	error: null
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER_LOADING:
			return {
				...state,
				isAuthenticated: false,
				isLoading: true,
				currentUser: null
			};
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				currentUser: action.payload
			};
		case SET_IS_NOT_AUTHENTICATED:
			return {
				...state,
				isAuthenticated: false,
				isLoading: false,
				currentUser: null,
				error: action.payload.message
			};
		case SIGNUP_USER_LOADING:
			return {
				...state,
				isAuthenticated: false,
				isLoading: true,
				currentUser: null
			};
		case SIGNUP_USER_SUCCESS:
			return {
				...state,
				isAuthenticated: false,
				isLoading: false,
				currentUser: null
			};
		case SIGNUP_USER_FAILURE:
			return {
				...state,
				isAuthenticated: false,
				isLoading: false,
				currentUser: null
			};
		case LOGOUT_USER:
			return {
				...state,
				isAuthenticated: false,
				currentUser: null
			};
		default:
			return state;
	}
};

export default authReducer;
