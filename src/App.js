import React from 'react';
import jwt_decode from 'jwt-decode';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Nav from './components/nav/nav';
import HomePage from './components/home/HomePage';
import PrivateRoute from './common/PrivateRoute';
import SignupPage from './components/auth/SignupPage';
import SigninPage from './components/auth/SigninPage';
import ResetPasswordPage from './components/auth/ResetPasswordPage';
import CreatePasswordPage from './components/auth/CreatePasswordPage';
import Practice from './components/Practice';
import UserDashBoard from './components/user/UserDashBoard';
import RiderDashboard from './components/rider/RiderDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { login } from './middlewares/auth';
import { Role } from './common/Role';
import { CreateParcel } from './components/parcel/CreateParcel';
const { Content, Footer } = Layout;

function App({ auth }) {
	return (
		<div>
			<div>
				<div className="App">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/practice" component={Practice} />
						<Route path="/auth/signin" component={SigninPage} />
						<Route path="/auth/signup" component={SignupPage} />
						<Route path="/users/resetPassword" component={ResetPasswordPage} />
						<Route path="/users/changePassword" component={CreatePasswordPage} />
						<PrivateRoute
							auth={auth}
							roles={[ Role.User ]}
							path="/user/dashboard"
							component={UserDashBoard}
						/>
						<PrivateRoute
							auth={auth}
							roles={[ Role.User ]}
							path="/parcel/create"
							component={CreateParcel}
						/>
						<PrivateRoute
							auth={auth}
							roles={[ Role.Rider ]}
							path="/rider/dashboard"
							component={RiderDashboard}
						/>
						<PrivateRoute
							auth={auth}
							roles={[ Role.Admin ]}
							path="/admin/dashboard"
							component={AdminDashboard}
						/>
					</Switch>
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps)(App);
