import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';
import './nav.css';
import Logo from '../../img/logo.png';
export const nav = () => {
	const menu = (
		<Menu>
			<Menu.Item icon={<UserOutlined />}>
				<Link to="/auth/signup">Sign Up</Link>
			</Menu.Item>
			<Menu.Item icon={<UserOutlined />}>
				<Link to="/auth/rider">Become as dispatcher</Link>
			</Menu.Item>
		</Menu>
	);
	return (
		<div className="nav">
			<div class="branding">
				<img src={Logo} />
			</div>
			<ul className="menu">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<button className="btn">
						<Link to="/auth/signin">Login</Link>
					</button>
				</li>
				<li>
					<Dropdown overlay={menu}>
						<Button>
							Register <DownOutlined />
						</Button>
					</Dropdown>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(nav);
