
import React, { useState, useEffect } from 'react';
import '../css/jobList/jobList.css';
import dataResponse from '../data/dataResponse.json';
import JobListCards from './JobListCards';

var isDebug = false;

function JobList() {
	const [jobs, setJobs] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		let mapData = (data) => {
			setIsLoaded(true);
			setJobs(data);
		}
		if (isDebug) {
			mapData(dataResponse);
			return;
		}

		fetch(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data`, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
			}
		})
			.then(response => {
				if (response.ok) {
					return response
						.json()
						.then(mapData);
				}
				throw new Error(`Nothing found`);
			})
			.catch(err => {
				setIsLoaded(true);
				setError(err);
			});
	}, []);

	let arrayLi = [];

	for (let index = 0; index < jobs.length; index++) {
		const element = jobs[index];
		arrayLi.push(
			<li key={index}>
				<JobListCards
					id={element.id}
					title={element.title}
					image={element.pictures[1]}
					name={element.name}
					updatedAt={element.updatedAt}
					lat={element.location.lat}
					long={element.location.long}
				/>
			</li>);
	}
	if (error) {
		return <p> Error {error.message}</p>
	} else if (!isLoaded) {
		return <p> Loading...</p>
	} else {
		return (
			<div className='backgr-color'>
				<div className='job-list container-board'>
					<div className='job-list__body'>
						<ul>
							{arrayLi}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default JobList;