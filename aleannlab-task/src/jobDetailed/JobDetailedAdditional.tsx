import React, { useState } from 'react';
import '../css/jobDetailed/jobDetailedAdditional.css';
import Job from '../types/JobType';


type DetailedAdditionalProps = {
	additional:Job,
	sizeWidthType: string,
};

function JobDetailedAdditional(props: DetailedAdditionalProps) {
	let additional = props.additional;

	const [move, setMove] = useState(0);

	const [touchPosition, setTouchPosition] = useState<number | null>(null) ;

	const handleLeft = () => {
		if (move === 0)
			return;
		setMove(move - 1);
	};

	const handleRight = () => {
		if (move === additional.pictures.length - ((props.sizeWidthType == 'desktop') ? 3 : 1))
			return;
		setMove(move + 1);
	};

	let handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
		let touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	}

	let handleTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
		const touchDown = touchPosition
		if (touchDown === null) {
			return
		}
		const currentTouch = e.touches[0].clientX
		const diff = touchDown - currentTouch
		if (diff > 5) {
			handleRight();
		}
		if (diff < -5) {
			handleLeft();
		}
		setTouchPosition(null);
	}

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

	let value = `translateX(${-100 * move}%)`;
	let imagesArray = [];
	for (let index = 0; index < additional.pictures.length; index++) {
		imagesArray.push(
			<li key={index} style={{ transform: value }}>
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
				<ul
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
				>
					{imagesArray}
				</ul>
				<div className='attached-imgs__btns'>
					<button type='button' onClick={handleLeft}><i className="bi bi-arrow-left"></i></button>
					<button type='button' onClick={handleRight}><i className="bi bi-arrow-right"></i></button>
				</div>
			</div>
		</div>
	)
}

export default JobDetailedAdditional;