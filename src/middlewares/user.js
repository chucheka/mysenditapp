import { API_BASE_URL, RESET_PASSWORD, CHANGE_PASSWORD } from '../constants/types';
import { success, error } from '../utils/APIUtils';
export function resetPassword(emailRequest) {
	return (dispatch) => {
		// dispatch(signupUserLoading());

		fetch(`${API_BASE_URL}/users/resetPassword`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(emailRequest)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.status == 500) {
					throw Error('Internal Server Error');
				}
				if (data.status === 200) {
					success(data.message);
				} else {
					error(data.message);
				}
			})
			.catch((err) => {
				// dispatch(signupUserFailure());
				error(err.message);
			});
	};
}
export function changePassword(passwordRequest) {
	return (dispatch) => {
		// dispatch(signupUserLoading());

		fetch(`${API_BASE_URL}/users/savePassword`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(passwordRequest)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.status == 500) {
					throw Error('Internal Server Error');
				}
				if (data.status === 200) {
					success(data.message);
				} else {
					error(data.message);
				}
			})
			.catch((err) => {
				// dispatch(signupUserFailure());
				error(err.message);
			});
	};
}
