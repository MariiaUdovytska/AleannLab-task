import React from 'react';
import '../css/jobDetailed/jobDetailedAdditional.css';

function JobDetailedAdditional(props) {
	let additional = props.additional;

	let employmentLi = [];
	for (let index = 0; index < additional.employment_type.length; index++) {
		employmentLi.push(
			<li key={index}>
				{additional.employment_type[index]}
			</li>);
	}

	let benefitsLi = [];
	for (let index = 0; index < additional.benefits.length; index++) {
		benefitsLi.push(
			<li key={index}>
				{additional.benefits[index]}
			</li>);
	}
	return (
		<div className='job-detailed__body-additional'>
			<h4>Additional info</h4>
			<div className='job-detailed__body-employment'>
				<h5>Employment type</h5>
				<ul>
					{employmentLi}
				</ul>
			</div>
			<div className='job-detailed__body-benefits'>
				<h5>Benefits</h5>
				<ul>
					{benefitsLi}
				</ul>
			</div>
		</div>
	)
}

export default JobDetailedAdditional;