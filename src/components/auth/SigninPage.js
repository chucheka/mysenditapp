import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Layout, Space } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import { login } from '../../middlewares/auth';
import Footer from '../../common/Footer';
import './auth.css';
const SigninPage = ({ login, location, history, auth }) => {
	const handleSubmit = (values) => {
		login(values, location, history);
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
						<h1>Sign In</h1>
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
							name="usernameOrEmail"
							rules={[
								{
									required: true,
									message: 'Please input your username or email!'
								}
							]}
						>
							<Input
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="Username or Email"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!'
								}
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<Link className="login-form-forgot" to="/users/resetPassword">
								Forgot password
							</Link>
						</Form.Item>

						<Form.Item>
							<Button
								type="primary"
								loading={auth.isLoading}
								htmlType="submit"
								className="login-form-button"
							>
								Log in
							</Button>
							<span style={{ display: 'inline-block', marginLeft: '16px' }}>
								Or <Link to="/auth/signup">register now!</Link>
							</span>
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
export default connect(mapStateToProps, { login })(withRouter(SigninPage));
