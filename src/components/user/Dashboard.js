import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from './Dashboard.module.css';
import { Badge, Steps, Table, Popconfirm, message } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import Logo from '../../img/logo.png';
import Package from '../../img/pkg.png';
import Truck from '../../img/black-truck.png';
import Bike from '../../img/motorbike.png';

const { Step } = Steps;

export const Dashboard = () => {
	const [ name, setName ] = useState('Chike');
	function confirm(e) {
		message.success('Parcel Delivery cancelled');
	}

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
			render: () => (
				<span>
					<Popconfirm
						title="Are you sure you want to cancel this order?"
						onConfirm={confirm}
						okText="Yes"
						cancelText="No"
						className={styled.cancel}
					>
						<a href="#">Cancel</a>
					</Popconfirm>
					<Link style={{ marginLeft: '16px' }}>View</Link>
				</span>
			)
		}
	];

	const data = [
		{
			key: '1',
			route: 'Lagos - Enugu',
			parcelId: '12123',
			status: 'Delivered',
			courier: 'Truck'
		},
		{
			key: '2',
			route: 'Calabar - Edo',
			parcelId: '12134',
			status: 'In Transit',
			courier: 'Rider'
		},
		{
			key: '3',
			route: 'Imo - Delta',
			parcelId: '124253',
			status: 'Cancelled',
			courier: 'Truck'
		}
	];

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
						<Link to="/parcel/create">logout</Link>
					</div>
				</div>
				<div className={styled.showcase}>
					<div className={styled.one}>
						<div className={styled.text}>
							<h2>Welcome to your dashboard,{name}.</h2>
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
							Deliveries <br /> <span className={styled.badge}>{12}</span>
						</div>
						<div>
							Recieved <br />
							<span className={styled.badge}>{10}</span>{' '}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
