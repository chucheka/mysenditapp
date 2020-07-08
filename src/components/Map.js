import React, { Fragment, useState, Component } from 'react';

import { Map, InfoWindow, Polyline, Marker, GoogleApiWrapper } from 'google-maps-react';

let Google_API_Key = 'AIzaSyCJNJGwnbqnSdx7a75nlptdLMH0Nkv3nuk';
export class MapContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stores: [
				{ lat: 47.49855629475769, lng: -122.14184416996333 },
				{ latitude: 47.359423, longitude: -122.021071 },
				{ latitude: 47.2052192687988, longitude: -121.988426208496 },
				{ latitude: 47.6307081, longitude: -122.1434325 },
				{ latitude: 47.3084488, longitude: -122.2140121 },
				{ latitude: 47.5524695, longitude: -122.0425407 }
			]
		};
	}

	displayMarkers = () => {
		return this.state.stores.map((store, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: store.latitude,
						lng: store.longitude
					}}
					onClick={() => console.log('You clicked me!')}
				/>
			);
		});
	};

	render() {
		const mapStyles = {
			width: '30%',
			height: '30%',
			margin: '0px auto'
		};
		const triangleCoords = [
			{ lat: 25.774, lng: -80.19 },
			{ lat: 18.466, lng: -66.118 },
			{ lat: 32.321, lng: -64.757 },
			{ lat: 25.774, lng: -80.19 }
		];

		return (
			<Map google={this.props.google} zoom={8} style={mapStyles} initialCenter={{ lat: 47.444, lng: -122.176 }}>
				{/* {this.displayMarkers()} */}
				<Polyline path={triangleCoords} strokeColor="#333" strokeOpacity={1} strokeWeight={2} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: Google_API_Key
})(MapContainer);
