import React from 'react';
import Locations from '../coordinates/Locations';
import '../css/jobList/jobListCards.css';
import DataCalculator from '../dataCalculator/DataCalculator';
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
						<Locations lat={props.location.lat} lng={props.location.long} />
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
					<DataCalculator updatedAt={props.updatedAt} class={false} />
				</div>
			</div>
		</div>
	)
}

export default JobListCards;