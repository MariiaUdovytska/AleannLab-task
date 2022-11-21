import React from 'react';
import { Link } from 'react-router-dom';
import Locations from '../coordinates/Locations';
import '../css/jobList/jobListCards.css';
import DataCalculator from '../dataCalculator/DataCalculator';
import Stars from '../stars/Stars';

type JobListCardsProps = {
	id: string,
	image: string,
	lat: number,
	long: number,
	title: string,
	name: string,
	updatedAt: string
};

function JobListCards(props: JobListCardsProps) {
	let link = `/jobDetailed?id=${props.id}`;
	if (props.id === undefined) {
		link = '/';
	}
	return (
		<div className='cardd'>
			<Link to={link} className='cardd__info'>
				<div className='cardd__info'>
					<div className='cardd__info-img'>
						<img src={props.image} alt='place'></img>
					</div>
					<div className='cardd__info-common'>
						<h2>{props.title}</h2>
						<div>Department name • {props.name}</div>
						<div>
							<i className="bi bi-geo-alt-fill"></i>
							<Locations lat={props.lat} lng={props.long} />
						</div>
					</div>
				</div>
			</Link>
			<div className='cardd__icons'>
				<Stars />
				<div className='cardd__icons-posted'>
					<div className='cardd__icons-posted-bookmark'>
						<i className="bi bi-bookmark"></i>
						<i className="bi bi-bookmark-fill"></i>
					</div>
					<DataCalculator updatedAt={props.updatedAt} classPosted={false} />
				</div>
			</div>
		</div>
	)
}

export default JobListCards;