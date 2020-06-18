import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Layout, Space } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import { changePassword } from '../../middlewares/user';
import Footer from '../../common/Footer';
import './auth.css';
const CreatePasswordPage = ({ login, location, history, auth }) => {
	const handleSubmit = (values) => {
		changePassword(values);
	};

	const handleBack = () => {
		history.go(-1);
	};
	return (
		<Fragment>
			<div className="sign-container">
				<Button icon={<LeftOutlined />} className="back" onClick={handleBack}>
					{' '}
					Back
				</Button>
				<div className="form">
					<div className="header">
						<h1>Reset Password</h1>
						<span>Enter your new password to reset password</span>
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
							name="newPassword"
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
								placeholder="New Password"
							/>
						</Form.Item>

						<Form.Item
							name="confirmNewPassword"
							dependencies={[ 'newPassword' ]}
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
								placeholder="Confirm New Password"
							/>
						</Form.Item>

						<Form.Item>
							<Button
								block
								type="primary"
								loading={auth.isLoading}
								htmlType="submit"
								className="login-form-button btn-danger"
							>
								Reset Password
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
export default connect(mapStateToProps, { changePassword })(withRouter(CreatePasswordPage));
