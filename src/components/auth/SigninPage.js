import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Layout, Space } from 'antd';
import { UserOutlined, LockOutlined, LeftOutlined } from '@ant-design/icons';
import { login } from '../../middlewares/auth';
import Logo from '../../img/logo.png';
import styled from './Signin.module.css';

const SigninPage = ({ login, location, history, auth }) => {
	const handleSubmit = (values) => {
		login(values, location, history, auth);
	};
	return (
		<Fragment>
			<div className={styled.container}>
				<div className={styled.logo}>
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				<div className={styled.form}>
					<div className={styled.box}>
						<h2>Log in to your account</h2>
						<Form
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
								<Button type="primary" loading={auth.isLoading} htmlType="submit">
									Log in
								</Button>{' '}
								Or <Link to="/users/ResetPassword">Forgotten Passwor?</Link>
							</Form.Item>
						</Form>
					</div>
					<div className={styled.smallfooter}>
						<span className={styled.text}>New to SendIt?</span>
						<span>
							<Link to="/auth/signup">Sign Up</Link>
						</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { login })(withRouter(SigninPage));
