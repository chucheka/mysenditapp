import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Button, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { signup } from '../../middlewares/auth';
import Footer from '../../common/Footer';
import './auth.css';
const { Title } = Typography;

const SignupPage = ({ signup, history, auth }) => {
	const handleSubmit = (values) => {
		signup(values, history);
	};
	const handleBack = () => {
		history.go(-1);
	};

	return (
		<Fragment>
			<div className="sign-container">
				<Button icon={<LeftOutlined />} onClick={handleBack} className="back">
					{' '}
					Back
				</Button>
				<div className="form">
					<div className="header">
						<h1>Sign Up</h1>
						<span>Fill in your details to create an account</span>
					</div>
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true
						}}
						onFinish={handleSubmit}
						size="large"
					>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input your username'
								}
							]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="*Username" />
						</Form.Item>
						<Form.Item
							name="email"
							rules={[
								{
									required: true,
									message: 'Please input your email'
								}
							]}
						>
							<Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="*Email" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your password!'
								}
							]}
							hasFeedback
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="*Password"
							/>
						</Form.Item>

						<Form.Item
							name="confirmPassword"
							dependencies={[ 'password' ]}
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Please confirm your password!'
								},
								({ getFieldValue }) => ({
									validator(rule, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}

										return Promise.reject('Passwords do not match!');
									}
								})
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="*Confirm Password"
							/>
						</Form.Item>

						<Form.Item
							name="phoneNumber1"
							rules={[
								{
									required: true,
									message: 'Please input your mobile number'
								}
							]}
						>
							<Input
								prefix={<PhoneOutlined className="site-form-item-icon" />}
								type="text"
								placeholder="*Phone Number"
							/>
						</Form.Item>
						<Form.Item name="phoneNumber2">
							<Input
								prefix={<PhoneOutlined className="site-form-item-icon" />}
								type="text"
								placeholder="Alternate Phone Number"
							/>
						</Form.Item>
						<Form.Item>
							Alreaady Registered? <Link to="/auth/signin"> Sign In </Link>
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								loading={auth.isLoading}
								className="login-form-button"
							>
								Sign Up
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { signup })(withRouter(SignupPage));
