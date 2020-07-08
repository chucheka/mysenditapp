import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Layout, Space } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { resetPassword } from '../../middlewares/user';
import Logo from '../../img/logo.png';
import styled from './Signin.module.css';
const ResetPasswordPage = ({ resetPassword }) => {
	const handleSubmit = (values) => {
		resetPassword(values);
	};

	// const handleBack = () => {
	// 	history.go(-1);
	// };

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
						height: '300px '
					}}
				>
					<div className={styled.box}>
						<h2>Enter email to get a link to reset password</h2>
						<Form
							initialValues={{
								remember: true
							}}
							onFinish={handleSubmit}
							size="large"
						>
							<Form.Item
								name="email"
								rules={[
									{
										required: true,
										message: 'Please input your email!'
									}
								]}
							>
								<Input
									prefix={<MailOutlined className="site-form-item-icon" />}
									placeholder="Enter email"
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
export default connect(null, { resetPassword })(withRouter(ResetPasswordPage));
