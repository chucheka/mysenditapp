import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AdminDashboard(props) {
	return (
		<div>
			<h1>Welcome to admin dashboard</h1> <Link to="/user/dashboard"> Go to user dashboard</Link>
		</div>
	);
}

AdminDashboard.propTypes = {};

export default AdminDashboard;
