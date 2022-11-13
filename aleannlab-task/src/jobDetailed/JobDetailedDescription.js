import React from 'react';
import '../css/jobDetailed/jobDetailedDescription.css';

function JobDetailedDescription(props) {
	let description = props.description;
	let data = description.split('Responsopilities:\n');
	let first = data[0];
	data = data[1].split('\nCompensation & Benefits:\n\t');
	let responsopilities = data[0];
	let compensation = data[1];

	return (
		<div className='description'>
			<p>{first}</p>
			<h3>Responsopilities:</h3>
			<p>{responsopilities}</p>
			<h3>Compensation & Benefits:</h3>
			<p>{compensation}</p>
		</div>
	)
}

export default JobDetailedDescription;