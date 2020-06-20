import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Nav from '../nav/nav';
import SmallNavBar from '../nav/SmallNavBar';
import Truck from '../../img/black-truck.png';
import Save from '../../img/save.png';
import Group from '../../img/group.png';
import Parcel from '../../img/parcel.png';
import Package from '../../img/package.png';
import PriceTag from '../../img/price-tag.png';
import Card from '../../img/card.png';
import Delivery from '../../img/deliveryman.png';
import Footer from '../../common/Footer';
import { Typography, Row, Col } from 'antd';
const { Title, Paragraph } = Typography;
export default function HomePage() {
	return (
		<div className="home">
			<div className="jumbotron">
				<Nav />
				<SmallNavBar />
				<div className="showcase">
					<div className="showcase-text">
						<h2 className="showcase-header">Deliver your parcels fast and safe</h2>
						<p className="paragraph">
							With sendit, you can order pick up and delivery of your parcels,and have it delivered on
							time
						</p>
						<button className="create-parcel">
							<Link to="/parcels/create">Send Parcel</Link>
						</button>
						<button className="track-parcel">
							<Link to="/parcels/track">Track Parcel</Link>
						</button>
					</div>
					<div className="showcase-image">
						<img src={Delivery} />
					</div>
				</div>
				<h2 className="why">why choose us</h2> *
			</div>
			<h2 className="why-hidden">Why choose us</h2>
			<div className="why-main">
				<div className="why-box">
					<div>
						<img src={Truck} />
					</div>
					<h3>On-time Delivery</h3>
					<div>We will have your parcels delivery fast</div>
				</div>
				<div className="why-box">
					<div>
						<img src={Save} />
					</div>
					<h3>Secure&Organised</h3>
					<div>We will have your parcels delivery fast</div>
				</div>
				<div className="why-box">
					<div>
						<img src={Group} />
					</div>
					<h3>Excellent Service</h3>
					<div>We will have your parcels delivery fast</div>
				</div>
			</div>
			<div className="steps">
				<h2>4 Simple Steps To Send With Us</h2>
				<div className="step">
					<div className="circle">
						<img src={Parcel} />
					</div>
					<h3>Packaging</h3>
					<p>Use your own packaging or let us choose the best package for your parcel</p>
				</div>
				<div className="step">
					<div className="circle">
						<img src={PriceTag} />
					</div>
					<h3>Calculate Price</h3>
					<p>
						Use our simple online tool to calculate the cost before you send.No hidden charges around here!!
					</p>
				</div>
				<div className="step">
					<div className="circle">
						<img src={Package} />
					</div>
					<h3>Schedule Pickup</h3>
					<p>
						Enter the details of the parcel in our user friendly form to help us distribute us parcel
						seamlessly
					</p>
				</div>
				<div className="step">
					<div className="circle">
						<img src={Card} />
					</div>
					<h3>Proceed To Make Payment</h3>
					<p>We offer you the best services at affordable cost</p>
				</div>
			</div>
			<div className="info">
				<div className="contact">
					<h2>Contact Us</h2>
					<span>Reach us only the below contact for questions and messages about our services</span>
					<br />
					<span>Email: ryanucheka@gmail.com</span>
					<br />
					<span>Phone : 08120901994</span>
				</div>
				<div className="about">
					<h2>About Us</h2>
					<p>
						Rapid Parcel is a courier comparison service which offers the cheapest, most reliable way of
						shipping your parcels to or from anywhere in the world.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
