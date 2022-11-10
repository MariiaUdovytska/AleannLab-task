import React from 'react';
import '../css/jobList/jobListCards.css';
import Stars from '../stars/Stars';

function JobListCards(props) {
	return (
		<div className='cardd'>
			<div className='cardd__info'>
				<img src={props.image} alt='place' width={85} height={85}></img>
				<div className='cardd__info-common'>
					<h2>{props.title}</h2>
					<div>Department name • {props.name}</div>
					<div>
						<i className="bi bi-geo-alt-fill"></i>
						<span>loc</span>
					</div>
				</div>
			</div>
			<div className='cardd__icons'>
				<Stars />
				<div className='cardd__icons-posted'>
					<i className="bi bi-bookmark"></i>
					<span>Posted 2 days ago</span>
				</div>
			</div>
		</div>
	)
}

export default JobListCards;