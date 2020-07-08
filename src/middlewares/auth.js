import { API_BASE_URL } from '../constants/types';
import { success, error } from '../utils/APIUtils';
import {
	signupUserLoading,
	signupUserSuccess,
	signupUserFailure,
	loginUserLoading,
	loginSuccess,
	loginFailure
} from '../actions/userActions';

export function login(loginRequest, location, history, auth) {
	return (dispatch) => {
		dispatch(loginUserLoading());

		fetch(`${API_BASE_URL}/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginRequest)
		})
			.then((res) => res.json())
			.then((data) => {
				// Get status code,if 200, set current user and isAuthenticated to true

				if (data.status === 401) {
					error(data.message);
					dispatch(loginFailure(data));
					history.push('/auth/signin');
				} else {
					const { accessToken, username, email, roles, id } = data;
					let userId = id;
					let currentUser = {
						userId,
						username,
						email,
						roles
					};
					dispatch(loginSuccess(currentUser));
					success('Successfully Logged In');
					localStorage.setItem('ACCESS_TOKEN', accessToken);
					const { from } = location.state || {
						from: { pathname: `/users/${userId}/dashboard` }
					};
					history.push(`${from.pathname}`);
				}
			})
			.catch((err) => {
				// error('Connection error');
				// dispatch(loginFailure('Connection error'));
			});
	};
}

export function signup(signupRequest, history) {
	return (dispatch) => {
		dispatch(signupUserLoading());

		fetch(`${API_BASE_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(signupRequest)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 201) {
					dispatch(signupUserSuccess());
					success(data.message);
					history.push('/auth/signin');
				} else {
					dispatch(signupUserFailure());
					error(data.message);
				}
			})
			.catch((err) => {
				dispatch(signupUserFailure());
				error(err.message);
			});
	};
}
export function logout() {
	localStorage.removeItem('ACCESS_TOKEN');
}
// checkUsernameAvailability(usernameValue)
//         .then(response => {
//             if(response.available) {
//                 this.setState({
//                     username: {
//                         value: usernameValue,
//                         validateStatus: 'success',
//                         errorMsg: null
//                     }
//                 });
//             } else {
//                 this.setState({
//                     username: {
//                         value: usernameValue,
//                         validateStatus: 'error',
//                         errorMsg: 'This username is already taken'
//                     }
//                 });
//             }
//         }).catch(error => {
//             // Marking validateStatus as success, Form will be recchecked at server
//             this.setState({
//                 username: {
//                     value: usernameValue,
//                     validateStatus: 'success',
//                     errorMsg: null
//                 }
//             });
//         });
//     }

// 	checkEmailAvailability(emailValue)
// 	.then(response => {
// 		if(response.available) {
// 			this.setState({
// 				email: {
// 					value: emailValue,
// 					validateStatus: 'success',
// 					errorMsg: null
// 				}
// 			});
// 		} else {
// 			this.setState({
// 				email: {
// 					value: emailValue,
// 					validateStatus: 'error',
// 					errorMsg: 'This Email is already registered'
// 				}
// 			});
// 		}
// 	}).catch(error => {
// 		// Marking validateStatus as success, Form will be recchecked at server
// 		this.setState({
// 			email: {
// 				value: emailValue,
// 				validateStatus: 'success',
// 				errorMsg: null
// 			}
// 		});
// 	});
// }

// export function getCurrentUser() {
// 	if (!localStorage.getItem(ACCESS_TOKEN)) {
// 		return Promise.reject('No access token set.');
// 	}

// 	return request({
// 		url: API_BASE_URL + '/user/me',
// 		method: 'GET'
// 	});
// }
