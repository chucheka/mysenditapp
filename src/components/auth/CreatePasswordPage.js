import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Layout, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { changePassword } from '../../middlewares/user';
import Logo from '../../img/logo.png';
import styled from './Signin.module.css';

const CreatePasswordPage = ({ resetPassword }) => {
	const handleSubmit = (values) => {
		changePassword(values);
	};

	return (
		<Fragment>
			<div className={styled.container}>
				<div className={styled.logo}>
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				<div
					className={styled.form}
					style={{
						height: '320px '
					}}
				>
					<div className={styled.box}>
						<h2>Create new password</h2>
						<Form onFinish={handleSubmit} size="large">
							<Form.Item
								className={styled.field}
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
									placeholder="New password"
								/>
							</Form.Item>

							<Form.Item
								className={styled.field}
								name="confirmNewPassword"
								dependencies={[ 'newPassword' ]}
								hasFeedback
								rules={[
									{
										required: true,
										message: 'Enter value for confirm password!'
									},
									({ getFieldValue }) => ({
										validator(rule, value) {
											if (!value || getFieldValue('newPassword') === value) {
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
									placeholder="Confirm new password"
								/>
							</Form.Item>

							<Form.Item>
								<Button type="primary" htmlType="submit">
									Submit
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

// const mapStateToProps = (state) => ({
// 	auth: state.auth
// });
export default connect(null, { changePassword })(withRouter(CreatePasswordPage));
