import React, { useState } from 'react';
import '../css/jobList/jobListCards.css';

function Stars(props) {
	const [rating, setRating] = useState(0);
	let stars = [];

	for (let index = 0; index < 5; index++) {
		let className = "bi bi-star-fill";
		if (index < rating)
			className += " star-selected";
		stars.push(<i key={index} className={className} onClick={() => setRating(index + 1)}></i>);
	}
	return (
		<div className='cardd__icons-stars'>
			{stars}
		</div>
	)
}

export default Stars;