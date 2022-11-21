import React from 'react';
import '../css/jobDetailed/jobDetailedDescription.css';

type DetailedDescriptionProps = {
	description: string
};

function JobDetailedDescription(props: DetailedDescriptionProps) {
	let description = props.description;
	let data = description.split('Responsopilities:\n');
	let first = data[0];
	data = data[1].split('\nCompensation & Benefits:\n\t');
	let responsopilities = data[0];
	let compensation = data[1].split('.')

	let compensationLi = [];
	for (let index = 0; index < compensation.length; index++) {
		const element = compensation[index];
		if (element !== "\n\n") {
			compensationLi.push(
				<li key={index}>{element}</li>
			)
		}

	}
	return (
		<div className='description'>
			<p>{first}</p>
			<h3>Responsopilities:</h3>
			<p>{responsopilities}</p>
			<h3>Compensation & Benefits:</h3>
			<span>Our physicians enjoy a wide range of benefits, including:</span>
			<ul>
				{compensationLi}
			</ul>
		</div>
	)
}

export default JobDetailedDescription;