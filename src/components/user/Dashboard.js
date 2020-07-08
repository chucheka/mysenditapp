import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from './Dashboard.module.css';
import { Badge, Steps, Table, Popconfirm, message } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import Logo from '../../img/logo.png';
import Package from '../../img/pkg.png';
import Truck from '../../img/black-truck.png';
import Bike from '../../img/motorbike.png';
import { fetchUserParcels, cancelParcel } from '../../middlewares/parcel';

const { Step } = Steps;

export const Dashboard = ({ parcelProps, auth, match, cancelParcel, history, fetchUserParcels }) => {
	//Remove this after implementing automatic login
	const [ name, setName ] = useState('Chike');
	const { userId } = match.params;

	useEffect(() => {
		// setName(auth.currentUser.username);
		fetchUserParcels(userId);
	}, []);

	const columns = [
		{
			title: 'Courier',
			dataIndex: 'courier',
			key: 'courier',
			responsive: [ 'md' ],
			render: (text) => {
				return text === 'Truck' ? (
					<img src={Truck} className={styled.courierType} />
				) : (
					<img src={Bike} className={styled.courierType} />
				);
			}
		},
		{
			title: 'Route',
			dataIndex: 'route',
			key: 'route',
			render: (text) => <a>{text}</a>
		},

		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status'
		},
		{
			title: 'Track Id',
			dataIndex: 'parcelId',
			key: 'parcelId'
		},

		{
			title: 'Action',
			key: 'action',
			render: ({ parcelId }) => (
				<span>
					<Popconfirm
						title="Are you sure you want to cancel delivery?"
						onConfirm={() => alert(typeof parcelId)}
						okText="Yes"
						cancelText="No"
						className={styled.cancel}
					>
						<a href="#">Cancel</a>
					</Popconfirm>
					<Link to={`/parcels/${parcelId}`} style={{ marginLeft: '16px' }}>
						View
					</Link>
				</span>
			)
		}
	];
	const data = parcelProps.parcels;
	let numDelivered = data.filter((d) => d.status == 'DELIVERED').length;
	const trackParcel = (values) => {
		console.log('Parcel Id:', values);
	};

	return (
		<div className={styled.container}>
			<div className={styled.main}>
				<div className={styled.nav}>
					<div className={styled.logo}>
						<Link to="/">
							<img src={Logo} />
						</Link>
					</div>
					<div className={styled.logout}>
						<Link to="/">logout</Link>
					</div>
				</div>
				<div className={styled.showcase}>
					<div className={styled.one}>
						<div className={styled.text}>
							<h2>
								Welcome to your dashboard <em>{name}.</em>
							</h2>
							<span>Get to manage your parcel orders with ease</span>
						</div>
						<div className={styled.package}>
							<img src={Package} />
						</div>
					</div>

					<div className={styled.two}>
						<span>
							<Link to="/parcel/create">Schedule Pickup</Link>
						</span>
						<span>Contact Us</span>
					</div>
					<div className={styled.three}>
						<div>
							Notifications <br />
							<span className={styled.badge}>{1}</span>{' '}
						</div>
						<div>
							Deliveries <br /> <span className={styled.badge}>{parcelProps.parcels.length}</span>
						</div>
						<div>
							Recieved <br />
							<span className={styled.badge}>{numDelivered}</span>{' '}
						</div>
					</div>
				</div>
				<div className={styled.track}>
					<input type="text" placeholder="Enter parcel Id" />
					<button className={styled.button}>Track Parcel</button>
				</div>
				<Table columns={columns} pagination={{ position: 'bottomRight' }} dataSource={data} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	parcelProps: state.parcelProps,
	auth: state.auth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchUserParcels, cancelParcel })(withRouter(Dashboard));
