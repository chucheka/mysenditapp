import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AppHeader.css';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import { connect } from 'react-redux';
const Header = Layout.Header;

const AppHeader = ({ auth, logout }) => {
	const handleMenuClick = ({ key }) => {
		if (key === 'logout') {
			logout();
		}
	};
	let menuItems;
	if (auth.currentUser) {
		menuItems = [
			<Menu.Item key="/">
				<Link to="/">
					<Icon type="home" className="nav-icon" />
				</Link>
			</Menu.Item>,
			<Menu.Item key="/contact">
				<Link to="/contact">
					<img src={pollIcon} alt="poll" className="poll-icon" />
				</Link>
			</Menu.Item>,
			<Menu.Item key="/profile" className="profile-menu">
				<ProfileDropdownMenu currentUser={this.props.currentUser} handleMenuClick={this.handleMenuClick} />
			</Menu.Item>
		];
	} else {
		menuItems = [
			<Menu.Item key="/signin">
				<Link to="/auth/signin">Sign In</Link>
			</Menu.Item>,
			<Menu.Item key="/auth/signup">
				<Link to="/auth/signup">Sign Up</Link>
			</Menu.Item>
		];
	}
	return (
		<Header className="app-header">
			<div className="container">
				<div className="app-title">
					<Link to="/">SendIT</Link>
				</div>
				<Menu
					className="app-menu"
					mode="horizontal"
					selectedKeys={[ this.props.location.pathname ]}
					style={{ lineHeight: '64px' }}
				>
					{menuItems}
				</Menu>
			</div>
		</Header>
	);
};

function ProfileDropdownMenu(props) {
	const dropdownMenu = (
		<Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
			<Menu.Item key="user-info" className="dropdown-item" disabled>
				<div className="user-full-name-info">{props.currentUser.name}</div>
				<div className="username-info">@{props.currentUser.username}</div>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="profile" className="dropdown-item">
				<Link to={`/users/${props.currentUser.username}`}>Profile</Link>
			</Menu.Item>
			<Menu.Item key="logout" className="dropdown-item">
				Logout
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown
			overlay={dropdownMenu}
			trigger={[ 'click' ]}
			getPopupContainer={() => document.getElementsByClassName('profile-menu')[0]}
		>
			<a className="ant-dropdown-link">
				<Icon type="user" className="nav-icon" style={{ marginRight: 0 }} /> <Icon type="down" />
			</a>
		</Dropdown>
	);
}
const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logout })(withRouter(AppHeader));
