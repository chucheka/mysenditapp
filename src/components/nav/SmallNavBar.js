import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, Drawer, Divider } from 'antd';
import './SmallNavBar.css';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../img/logo.png';
export const SmallNavBar = () => {
	const [ visible, setVisible ] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};
	function handleMenuClick(e) {}

	const menu = (
		<Menu onClick={handleMenuClick}>
			<Menu.Item icon={<UserOutlined />}>
				<Link to="/auth/signup">Sign Up</Link>
			</Menu.Item>
			<Menu.Item icon={<UserOutlined />}>
				<Link to="/auth/rider">Become as dispatcher</Link>
			</Menu.Item>
		</Menu>
	);

	return (
		<div className="navbar">
			<div class="nav-branding">
				<img src={Logo} />
			</div>
			<div className="nav-menu-icon">
				<MenuOutlined
					onClick={showDrawer}
					style={{
						float: 'right'
					}}
				/>
				<Drawer title="SendIt" placement="top" closable={true} onClose={onClose} visible={visible}>
					<div className="nav-menu">
						<div className="menu-link">
							<Link to="/">Home</Link>
						</div>

						<div className="menu-link">
							<Link to="/auth/signin">Log In</Link>
						</div>

						<div className="menu-link">
							<Dropdown overlay={menu}>
								<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
									Register <DownOutlined />
								</a>
							</Dropdown>
						</div>
					</div>
				</Drawer>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SmallNavBar);
