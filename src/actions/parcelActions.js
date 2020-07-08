import {
	FETCHING_PARCELS_FAILURE,
	FETCHING_PARCELS_SUCCESS,
	CREATE_PARCEL_SUCCESS,
	CREATE_PARCEL_FAILURE,
	PARCEL_IS_LOADING,
	FETCHING_PARCELS_LOADING,
	CANCEL_PARCEL_SUCCESS,
	CANCEL_PARCEL_FAILURE,
	CANCEL_PARCEL_LOADING
} from '../constants/types';

export function getParcelsLoading() {
	return {
		type: FETCHING_PARCELS_LOADING
	};
}
export function getParcelsSuccess(payload) {
	return {
		type: FETCHING_PARCELS_SUCCESS,
		payload: payload
	};
}
export function getParcelsFailure(error) {
	return {
		type: FETCHING_PARCELS_FAILURE,
		payload: error
	};
}

export function createParcelSuccess(payload) {
	return {
		type: CREATE_PARCEL_SUCCESS,
		payload: payload
	};
}
export function createParcelFailure(error) {
	return {
		type: CREATE_PARCEL_FAILURE,
		payload: error
	};
}
export function parcelIsLoading() {
	return {
		type: PARCEL_IS_LOADING
	};
}
export function cancelParcelSuccess(payload) {
	return {
		type: CANCEL_PARCEL_SUCCESS,
		payload: payload
	};
}
export function cancelParcelFailure(error) {
	return {
		type: CANCEL_PARCEL_FAILURE,
		error: error
	};
}
export function cancelParcelLoading(error) {
	return {
		type: CANCEL_PARCEL_LOADING
	};
}
