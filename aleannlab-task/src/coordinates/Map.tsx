import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import '../css/coordinates/coordinates.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});

type MapProps = {
	lat: number;
	long: number;
};

L.Marker.prototype.options.icon = DefaultIcon;

function Map(position: MapProps){
	return (
	<MapContainer center={[position.lat, position.long]} zoom={10} scrollWheelZoom={false}>
		<TileLayer
			url="https://maps.geoapify.com/v1/tile/dark-matter-brown/{z}/{x}/{y}.png?apiKey=4c81d020d86e42ef99ac09266f85ce3f"
		/>
		<Marker position={[position.lat, position.long]} >
		</Marker>
	</MapContainer>);
};

export default Map;