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
import Dashboard from './components/user/Dashboard';
import RiderDashboard from './components/rider/RiderDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { login } from './middlewares/auth';
import { Role } from './common/Role';
import { CreateParcel } from './components/parcel/CreateParcel';
import { Payment } from './components/parcel/Payment';
import { Calculator } from './components/parcel/Calculator';
import NotFound from './common/NotFound';
const { Content, Footer } = Layout;

function App({ auth }) {
	return (
		<div>
			<div>
				<div className="App">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/auth/signin" component={SigninPage} />
						<Route path="/auth/signup" component={SignupPage} />
						<Route path="/parcel/create" component={CreateParcel} />
						<Route path="/payment" component={Payment} />
						<Route path="/users/:userId/dashboard" component={Dashboard} />
						<Route path="/calculate" component={Calculator} />
						<Route path="/users/resetPassword" component={ResetPasswordPage} />
						<Route path="/users/changePassword" component={CreatePasswordPage} />
						<PrivateRoute
							auth={auth}
							roles={[ Role.User ]}
							path="/users/:userId/dashboard"
							component={Dashboard}
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
						<Route component={NotFound} />
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
