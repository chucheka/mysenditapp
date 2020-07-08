import React, { Component, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Steps, Input, Form } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import Logo from '../../img/logo.png';
import Package from '../../img/pkg.png';

import styled from './Parcel.module.css';

import ModalForm from './ModalForm';

const { Step } = Steps;
export const Parcel = () => {
	const [ visible, setVisible ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const formRef = useRef();

	const onSubmitForm = (values) => {
		console.log('Received values of form: ', values);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setVisible(false);
		}, 3000);
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
				<div className={styled.header}>
					<div className={styled.info}>
						<img src={Package} />
						<span>
							Parcel Order <br />Id: 22345
						</span>
					</div>
					<div className={styled.cost}>Cost: $12,300</div>
				</div>
				<div className={styled.body}>
					<div className={styled.map}>The map</div>
					<div className={styled.location}>
						<Steps direction="vertical" size="small">
							<Step title="Pick Up" description="Lekki, Lagos State" icon={<EnvironmentOutlined />} />
							<Step title="Destination" description="Benin, Edo state" icon={<EnvironmentOutlined />} />
						</Steps>,
					</div>
					<div className={styled.status}>
						<Steps direction="vertical" current={1}>
							<Step
								title="At Pickup"
								description={
									<div>
										<span>Lekki,Lagos state</span>
										<span className={styled.date}>07:30AM,Thurs,12 May</span>
									</div>
								}
							/>
							<Step
								title="In Transit"
								description={
									<div>
										<span>Lekki,Lagos state</span>
										<span className={styled.date}>07:30AM,Thurs,12 May</span>
									</div>
								}
							/>
							<Step
								title="Delivered"
								description={
									<div>
										<span>Lekki,Lagos state</span>
										<span className={styled.date}>07:30AM,Thurs,12 May</span>
									</div>
								}
							/>
						</Steps>
					</div>
					<div className={styled.buttons}>
						<button className={styled.first}>Cancel Order</button>
						<button
							className={styled.second}
							onClick={() => {
								setVisible(true);
							}}
						>
							Change Destination
						</button>
						<ModalForm
							visible={visible}
							onSubmitForm={onSubmitForm}
							loading={loading}
							onReturn={() => {
								setVisible(false);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Parcel);
