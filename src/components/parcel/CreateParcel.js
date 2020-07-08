import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input, Button, Col, Row, Steps } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import Footer from '../../common/Footer';
import { postParcel } from '../../middlewares/parcel';
import './Parcel.css';
const { Step } = Steps;

export const CreateParcel = ({ auth, parcel, postParcel }) => {
	console.log(parcel, auth);
	const handleSubmit = (values) => {
		postParcel(values);
	};
	const handleBack = () => {
		// history.go(-1);
	};

	return (
		<Fragment>
			<div className="stages">
				<Steps size="small" current={1}>
					<Step status="process" title="Details" />
					<Step status="wait" title="Payment" />
					<Step status="wait" title="Done" />
				</Steps>
			</div>
			<div className="parcel-container">
				<div className="form-header">
					<h1>Schedule Pick Up</h1>
					<span>Kindly fill the form correctly</span>
				</div>
				<Form
					name="parcel_form"
					className="parcel-form"
					layout="horizontal"
					onFinish={handleSubmit}
					size="middle"
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
					<Form.Item name="dest_address" rules={[ { required: true, message: 'Enter value for address!' } ]}>
						<Input placeholder="Destination address" />
					</Form.Item>
					<Form.Item>
						<Row gutter={8}>
							<Col span={12}>
								<Form.Item
									name="dest_city"
									noStyle
									rules={[ { required: true, message: 'Enter value for city!' } ]}
								>
									<Input placeholder="Destination city" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="dest_state"
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
								parcel
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
							Schedule Pick Up
						</Button>
					</Form.Item>
				</Form>
			</div>
			<Footer />
		</Fragment>
	);
};

CreateParcel.propTypes = {
	prop: PropTypes
};
const mapStateToProps = (state) => ({
	parcel: state.parcel,
	auth: state.auth
});
export default connect(mapStateToProps, { postParcel })(withRouter(CreateParcel));
