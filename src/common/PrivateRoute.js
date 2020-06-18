import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { error } from '../utils/APIUtils';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, roles, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			const { currentUser } = auth;
			if (!currentUser) {
				// not logged in so redirect to login page with the return url
				return <Redirect to={{ pathname: '/auth/signin', state: { from: props.location } }} />;
			}

			// check if route is restricted by role
			if (roles && roles.indexOf(currentUser.roles[0]) === -1) {
				// role not authorised so redirect to home page
				return (
					<Redirect
						to={{
							pathname: '/auth/signin',
							state: { from: props.location } // if not authed, redirect to signin form but carry along the                                       //location the user wanted to visit which is put in the state
						}}
					/>
				);
			}

			// authorised so return component
			return <Component {...props} />;
		}}
	/>
);
PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
