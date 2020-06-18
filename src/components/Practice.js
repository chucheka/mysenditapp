import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Footer } = Layout;
export default function Practice() {
	const [ current, setCurrent ] = useState('mail');

	let handleClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<Layout>
			<Content>
				<div style={{ height: '90vh', backgroundColor: 'red' }}>The content goes in here</div>
			</Content>
			<Footer>
				<div style={{ height: '10vh', textAlign: 'center' }}>All Right Reserved &copy; Ucheka Chike</div>
			</Footer>
		</Layout>
	);
}
