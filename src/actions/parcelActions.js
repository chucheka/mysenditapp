import {
	FETCHING_PARCEL_FAILURE,
	FETCHING_PARCEL_SUCCESS,
	POST_PARCEL_ORDER,
	SET_IS_LOADING
} from '../constants/types';

export function getParcels(payload) {
	return {
		type: FETCHING_PARCEL_SUCCESS,
		payload: payload
	};
}
export function getParcelsFailure(error) {
	return {
		type: FETCHING_PARCEL_FAILURE,
		payload: error
	};
}
export function setParcelOrder(payload) {
	return {
		type: POST_PARCEL_ORDER,
		payload: payload
	};
}

export function setIsLoading() {
	return {
		type: SET_IS_LOADING
	};
}
