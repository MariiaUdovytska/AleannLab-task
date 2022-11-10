import React from 'react';
import '../css/jobList/jobListCards.css';
import Stars from '../stars/Stars';

function JobListCards(props) {
	return (
		<div className='cardd'>
			<div className='cardd__info'>
				<div className='cardd__info-img'>
					<img src={props.image} alt='place'></img>
				</div>
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
					<div className='cardd__icons-posted-bookmark'>
						<i className="bi bi-bookmark"></i>
						<i className="bi bi-bookmark-fill"></i>
					</div>
					<span>Posted 2 days ago</span>
				</div>
			</div>
		</div>
	)
}

export default JobListCards;