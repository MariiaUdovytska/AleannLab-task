import React, { useEffect, useState } from 'react';

type MapPropsPosition = {
	lat: number,
	lng: number,
};

function Locations(props: MapPropsPosition) {
	const myAPIKey = "4c81d020d86e42ef99ac09266f85ce3f";
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [name, setName] = useState("");

	useEffect(() => {
		const reverseGeocodingUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${props.lat}&lon=${props.lng}&apiKey=${myAPIKey}`;

		fetch(reverseGeocodingUrl).then(result => result.json())
			.then(featureCollection => {
				if (featureCollection.features.length === 0) {
					console.log("The address is not found");
					return;
				}

				const foundAddress = featureCollection.features[0];

				setCity(foundAddress.properties.city);
				setCountry(foundAddress.properties.country);
				setName(foundAddress.properties.name);
			});
	});

	let title = "";
	if (city !== undefined && country !== undefined)
		title = city + ', ' + country;
	else if (country !== undefined)
		title = country;
	else
		title = name;

	return (
		<span>{title}</span>
	)
}
export default Locations;