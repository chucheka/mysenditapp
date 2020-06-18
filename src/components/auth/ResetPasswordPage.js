import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import { Form, Input, Button} from 'antd';
import { MailOutlined, LeftOutlined } from '@ant-design/icons';
import { resetPassword } from '../../middlewares/user';
import Footer from '../../common/Footer';
import './auth.css';
const ResetPasswordPage = ({ resetPassword, location, history, auth }) => {
	const handleSubmit = (values) => {
		resetPassword(values);
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
						<h1>Lost your password?</h1>
						<span>
							Supply us with the email address you registered with and we'll send you a link to reset your
							password
						</span>
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
							name="email"
							rules={[
								{
									required: true,
									message: 'Please enter your email'
								}
							]}
						>
							<Input
								prefix={<MailOutlined className="site-form-item-icon" />}
								placeholder="Enter email"
							/>
						</Form.Item>

						<Form.Item>
							<Button
								type="primary"
								loading={auth.isLoading}
								htmlType="submit"
								block
								className="login-form-button"
							>
								Send
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
export default connect(mapStateToProps, { resetPassword })(withRouter(ResetPasswordPage));
