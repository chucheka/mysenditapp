import { API_BASE_URL } from '../constants/types';
import { success, error } from '../utils/APIUtils';
import {
	createParcelSuccess,
	createParcelFailure,
	parcelIsLoading,
	getParcelsLoading,
	getParcelsSuccess,
	getParcelsFailure,
	cancelParcelSuccess,
	cancelParcelFailure,
	cancelParcelLoading
} from '../actions/parcelActions';
import { formatAddress } from '../utils/Helpers';
const token = localStorage.getItem('ACCESS_TOKEN');

export function fetchUserParcels(userId) {
	return (dispatch) => {
		dispatch(getParcelsLoading());

		fetch(`${API_BASE_URL}/users/${userId}/parcels`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			}
			// body: JSON.stringify(passwordRequest)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status == 200) {
					const parcels = data.payload
						.filter((p) => {
							return p.status != 'CANCELLED';
						})
						.map((p) => {
							let parcelMap = {};
							parcelMap.key = p.parcelId;
							parcelMap.parcelId = p.parcelId;
							parcelMap.status = p.status;
							parcelMap.courier = 'Truck';
							parcelMap.createdAt = p.createdAt;
							parcelMap.dest_address = formatAddress(p.destination).address;
							parcelMap.dest_city = formatAddress(p.destination).city;
							parcelMap.dest_state = formatAddress(p.destination).state.split(' ')[0];
							parcelMap.pickup_address = formatAddress(p.pickupLocation).address;
							parcelMap.pickup_city = formatAddress(p.pickupLocation).city;
							parcelMap.pickup_state = formatAddress(p.pickupLocation).state.split(' ')[0];
							parcelMap.route =
								formatAddress(p.pickupLocation).state.split(' ')[0] +
								'-' +
								formatAddress(p.destination).state.split(' ')[0];
							return parcelMap;
						});

					dispatch(getParcelsSuccess(parcels));
				} else {
					dispatch(getParcelsFailure(data.message));
				}
			})
			.catch((err) => {
				// dispatch(signupUserFailure());
				error(err.message);
			});
	};
}
export function cancelParcel(parcelId, history, userId) {
	return (dispatch) => {
		// dispatch(cancelParcelLoading());
		fetch(`${API_BASE_URL}/parcels/${parcelId}/cancel`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('Cancel parcel>>', data);
				// Get status code,if 200, set current user and isAuthenticated to true
				if (data.status !== 200) {
					error(data.message);
					// dispatch(cancelParcelFailure(data.message));
					history.push(`/users/${userId}/dashboard`);
				} else {
					success(data.message);
					// dispatch(cancelParcelSuccess(data.payload));
					history.push(`/users/${userId}/dashboard`);
				}
			})
			.catch((err) => {
				// error('Connection error');
				// dispatch(createParcelFailure('Connection error'));
			});
	};
}

export function postParcel(newParcel) {
	return (dispatch) => {
		dispatch(parcelIsLoading());
		newParcel.price = '12000';
		console.log(newParcel);
		fetch(`${API_BASE_URL}/parcels`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newParcel)
		})
			.then((res) => res.json())
			.then((data) => {
				// Get status code,if 200, set current user and isAuthenticated to true

				if (data.status !== 200) {
					error(data.message);
					dispatch(createParcelFailure(data.message));
					// history.push('/parcel/create');
				} else {
					success(data.message);
					dispatch(createParcelSuccess(data.payload));
					// history.push(`/users/1010/dashboard`);
				}
			})
			.catch((err) => {
				error('Connection error');
				dispatch(createParcelFailure('Connection error'));
			});
	};
}
