import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const RiderDashboard = () => {
	return (
		<div>
			<h1>Welcome to rider dashboard</h1>
		</div>
	);
};

RiderDashboard.propTypes = {
	prop: PropTypes
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {

// }

export default connect(null)(RiderDashboard);
