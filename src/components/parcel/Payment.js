import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input, Button, Col, Row, Steps } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import Footer from '../../common/Footer';
import './Parcel.css';
const { Step } = Steps;

export const Payment = ({ history }) => {
	const handleSubmit = (values) => {
		console.log(values);
	};
	const handleBack = () => {
		history.go(-1);
	};

	return (
		<Fragment>
			<div className="stages">
				<Steps size="small" current={1}>
					<Step title="Details" />
					<Step status="process" title="Payment" />
					<Step status="wait" title="Done" />
				</Steps>
			</div>
			<div className="parcel-container">
				<div className="form-header">
					<h1>Make Payment</h1>
					<span>Kindly fill in your payment details</span>
				</div>
				<Form
					name="parcel_form"
					className="parcel-form"
					layout="horizontal"
					onFinish={handleSubmit}
					size="large"
				>
					<Form.Item name="pickup_address">
						<Input placeholder="Pick-up address" />
					</Form.Item>
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
					<Form.Item name="pickup_contact">
						<Input placeholder="pick-up contact" />
					</Form.Item>
					<Form.Item name="destination_address">
						<Input placeholder="Destination address" />
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
					<Form.Item name="destination_contact">
						<Input placeholder="Destination contact" />
					</Form.Item>
					<Form.Item>
						<Row gutter={8}>
							<Col span={6}>
								<Form.Item
									name="weight"
									noStyle
									rules={[ { required: true, message: 'Enter value for weight of parcel!' } ]}
								>
									<Input placeholder="weight in kg" />
								</Form.Item>
							</Col>
							<Col
								span={18}
								className="inlin-form"
								style={{
									display: 'flex'
								}}
							>
								<Form.Item
									name="length"
									noStyle
									rules={[ { required: true, message: 'Enter value for length!' } ]}
								>
									<Input placeholder="length in cm" style={{ marginRight: '4px' }} />
								</Form.Item>
								<Form.Item
									name="width"
									noStyle
									rules={[ { required: true, message: 'Enter value for width!' } ]}
								>
									<Input placeholder="width" style={{ marginRight: '4px' }} />
								</Form.Item>
								<Form.Item
									name="height"
									noStyle
									rules={[ { required: true, message: 'Enter value for height!' } ]}
								>
									<Input placeholder="heigth" />
								</Form.Item>
							</Col>
						</Row>
					</Form.Item>
					<Form.Item>
						<Button icon={<LeftOutlined />} style={{ marginRight: '10px' }} onClick={handleBack}>
							Back
						</Button>
						<Button
							type="primary"
							htmlType="submit"
							style={{
								fontSize: '1rem',
								fontWeight: '500'
							}}
						>
							Make Payment
						</Button>
					</Form.Item>
				</Form>
			</div>
			<Footer />
		</Fragment>
	);
};

Payment.propTypes = {
	prop: PropTypes
};

const mapStateToProps = (state) => ({
	parcel: state.parcel
});

export default connect(mapStateToProps)(withRouter(Payment));
