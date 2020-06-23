import React, { Component, Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Col, Row, Steps } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import Footer from '../../common/Footer';
import styled from './Calculator.module.css';
import Logo from '../../img/logo.png';
const { Step } = Steps;

export const Calculator = ({ history }) => {
	const [ price, setPrice ] = useState();
	const handleSubmit = (values) => {
		setPrice(12000);
		console.log(values);
	};
	const handleBack = () => {
		history.go(-1);
	};

	return (
		<Fragment>
			<div className={styled.container}>
				<div className={styled.main}>
					<div className={styled.nav}>
						<div className={styled.logo}>
							<Link to="/">
								<img src={Logo} />
							</Link>
						</div>
						<div className={styled.menu}>
							<Link to="/parcel/create">Send Parcel >></Link>
						</div>
					</div>
					<div className={styled.header}>
						<h1>Estimate Price</h1>
					</div>

					<Form
						name="parcel_form"
						layout="horizontal"
						onFinish={handleSubmit}
						size="large"
						className={styled.form}
					>
						<h2 className={styled.price}>{price ? `Price : $${price}` : null}</h2>
						<Form.Item>
							<Row gutter={8}>
								<Col span={12}>
									<Form.Item
										name="pickup_city"
										noStyle
										rules={[ { required: true, message: 'Enter value for city!' } ]}
									>
										<Input placeholder="Pick up city" />
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item
										name="pickup_state"
										noStyle
										rules={[ { required: true, message: 'Enter value for state!' } ]}
									>
										<Input placeholder="Pick up state" />
									</Form.Item>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item>
							<Row gutter={8}>
								<Col span={12}>
									<Form.Item
										name="destination_city"
										noStyle
										rules={[ { required: true, message: 'Enter value for city!' } ]}
									>
										<Input placeholder="Destination city" />
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item
										name="destination_state"
										noStyle
										rules={[ { required: true, message: 'Enter value for state!' } ]}
									>
										<Input placeholder="Destination state" />
									</Form.Item>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item
							name="weight"
							noStyle
							rules={[ { required: true, message: 'Enter value for weight of parcel!' } ]}
						>
							<Input placeholder="weight in kg" />
						</Form.Item>
						<Form.Item
							style={{
								marginTop: '20px'
							}}
						>
							<Row gutter={8}>
								<Col span={8}>
									<Form.Item
										name="length"
										noStyle
										rules={[ { required: true, message: 'Enter value for city!' } ]}
									>
										<Input placeholder="length in cm" />
									</Form.Item>
								</Col>
								<Col span={8}>
									<Form.Item
										name="width"
										noStyle
										rules={[ { required: true, message: 'Enter value for city!' } ]}
									>
										<Input placeholder="width in cm" />
									</Form.Item>
								</Col>
								<Col span={8}>
									<Form.Item
										name="height"
										noStyle
										rules={[ { required: true, message: 'Enter value for state!' } ]}
									>
										<Input placeholder="height in cm" />
									</Form.Item>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Calculate
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</Fragment>
	);
};

Calculator.propTypes = {
	prop: PropTypes
};

const mapStateToProps = (state) => ({
	parcel: state.parcel
});

export default connect(mapStateToProps)(withRouter(Calculator));
