import React, { Fragment, useState } from 'react';
import Geocode from 'react-geocode';
import { Link } from 'react-router-dom';
import Map from './Map';
Geocode.setApiKey('AIzaSyCJNJGwnbqnSdx7a75nlptdLMH0Nkv3nuk');

export default function Practice() {
	const [ latitude, setLatitude ] = useState('');
	const [ longitude, setLongitude ] = useState('');
	const [ value, setValue ] = useState();
	const [ error_msg, setError ] = useState();
	const [ address, setAddress ] = useState('Iba,Ojo, Lagos state');

	let convertAddressToCoords = (address) => {
		// Geocode.fromAddress('Iba,Ojo, Lagos state').then(
		// 	(response) => {
		// 		const { lat, lng } = response.results[0].geometry.location;
		// 		setLatitude(lat);
		// 		setLongitude(lng);
		// 		console.log(latitude, longitude);
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// 	}
		// );
		Geocode.fromLatLng('6.4989574', '3.1930302').then(
			(response) => {
				const addr = response.results[0].formatted_address;
				setAddress(addr);
				console.log(addr);
			},
			(error) => {
				console.error(error);
			}
		);
	};
	function getCoordinates(position) {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
		console.log(position);
	}
	function showError(error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				alert('User denied the request for Geolocation.');
				break;
			case error.POSITION_UNAVAILABLE:
				alert('Location information is unavailable.');
				break;
			case error.TIMEOUT:
				alert('The request to get user location timed out.');
				break;
			case error.UNKNOWN_ERROR:
				alert('An unknown error occurred.');
				break;
		}
	}
	let Google_API_Key = 'AIzaSyCJNJGwnbqnSdx7a75nlptdLMH0Nkv3nuk';

	let getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getCoordinates, showError);
		} else {
			error_msg = 'Geolocation is not supported by this browser.';
			console(error_msg);
		}
	};
	// let createInfoWindow = (e, map) => {
	// 	const infoWindow = new window.google.maps.InfoWindow({
	// 		content: '<div id="infoWindow" />',
	// 		position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
	// 	});
	// 	infoWindow.addListener('domready', (e) => {
	// 		render(<InfoWindow />, document.getElementById('infoWindow'));
	// 	});
	// 	infoWindow.open(map);
	// };

	return (
		<div>
			<Map />
		</div>
	);
}
