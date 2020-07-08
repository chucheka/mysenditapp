import {
	FETCHING_PARCELS_SUCCESS,
	FETCHING_PARCELS_FAILURE,
	CREATE_PARCEL_SUCCESS,
	CREATE_PARCEL_FAILURE,
	PARCEL_IS_LOADING,
	FETCHING_PARCELS_LOADING,
	CANCEL_PARCEL_SUCCESS,
	CANCEL_PARCEL_FAILURE,
	CANCEL_PARCEL_LOADING
} from '../constants/types';
let initialState = {
	isLoading: false,
	parcels: [],
	errors: null
};
const parcelReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_PARCELS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case FETCHING_PARCELS_SUCCESS:
			return {
				...state,
				parcels: [ ...state.parcels, ...action.payload ],
				isLoading: false,
				errors: null
			};
		case FETCHING_PARCELS_FAILURE:
			return {
				...state,
				isLoading: false,
				errors: action.payload
			};
		case PARCEL_IS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case CREATE_PARCEL_SUCCESS:
			return {
				...state,
				parcels: [ ...state.parcels, action.payload ],
				isLoading: false,
				errors: false
			};
		case CREATE_PARCEL_FAILURE:
			return {
				...state,
				isLoading: false,
				errors: action.payload
			};
		case CANCEL_PARCEL_SUCCESS:
			return {
				...state,
				parcels: [ ...state.parcels, action.payload ],
				isLoading: false,
				errors: null
			};
		default:
			return state;
	}
};

export default parcelReducer;
