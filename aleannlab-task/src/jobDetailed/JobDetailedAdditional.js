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

	let imagesArray = [];
	for (let index = 0; index < additional.pictures.length; index++) {
		imagesArray.push(
			<li key={index}>
				<img
					src={additional.pictures[index]}
					alt='attached-pictures'>
				</img>
			</li>
		);
	}

	return (
		<div className='additional'>
			<div className='additional-info'>
				<h4>Additional info</h4>
				<div className='additional-info__employment'>
					<h5>Employment type</h5>
					<ul>
						{employmentLi}
					</ul>
				</div>
				<div className='additional-info__benefits'>
					<h5>Benefits</h5>
					<ul>
						{benefitsLi}
					</ul>
				</div>
			</div>
			<div className='attached-imgs'>
				<h4>Attached images</h4>
				<ul>
					{imagesArray}
				</ul>
			</div>
		</div>
	)
}

export default JobDetailedAdditional;