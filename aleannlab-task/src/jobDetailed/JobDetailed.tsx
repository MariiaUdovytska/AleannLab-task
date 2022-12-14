import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../css/jobDetailed/jobDetailed.css';
import dataResponse from '../data/dataResponse.json';
import DataCalculator from '../dataCalculator/DataCalculator';
import JobDetailedAdditional from './JobDetailedAdditional';
import JobDetailedDescription from './JobDetailedDescription';
import DetailedMap from './DetailedMap';
import Job from '../types/JobType';
import authorizationMap from '../authorization/AuthorizationMap';

var isDebug = false;

function JobDetailed() {
	const [sizeWidthType, setSizeWidthType] = useState('desktop');
	useEffect(() => {
		let getWindowDimensions = () => {
			const { innerWidth: width } = window;
			return width;
		}

		let handleWindowDimensions = () => {
			let width = getWindowDimensions()
			if (width <= 626)
				setSizeWidthType('tablet');
			else
				setSizeWidthType('desktop');
		}

		handleWindowDimensions();
		window.addEventListener('resize', handleWindowDimensions);
		return function cleanup() {
			window.removeEventListener('resize', handleWindowDimensions);
		};
	}, []);

	const [jobs, setJobs] = useState<Array<Job>>([]);
	const [error, setError] = useState<Error | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		let mapData = (data:any) => {
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
				'Authorization': 'Bearer ' + authorizationMap,
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

	const [searchParams] = useSearchParams();
	let id = searchParams.get('id');

	if (error) {
		return <p> Error {error.message}</p>
	} else if (!isLoaded) {
		return <p> Loading...</p>
	} else {
		const job = jobs.filter(job => job.id === id)[0];
		if (job === undefined)
			return (<>Wwong Id:{id}</>)

		let thousand = /k/gi;
		let dash = /-/gi;
		let salary = job.salary.replace(thousand, '000').replace(dash, '???');

		return (
			<div className='job-detailed container-detailed'>
				<div className='job-detailed__body'>
					<div className='job-detailed__body-header'>
						<h1>Job Details</h1>
						<div className='job-detailed__body-header-icons'>
							<div className='job-detailed__body-header-bookmark'>
								<i className="bi bi-bookmark"></i>
								<i className="bi bi-bookmark-fill"></i>
								<span>Save to my list</span>
							</div>
							<div className='job-detailed__body-header-share'>
								<i className="bi bi-share-fill"></i>
								<span>Share</span>
							</div>
						</div>
					</div>
					<div className='job-detailed__body-unbtn'>
						<button type='button'>Apply now</button>
					</div>
					<div className='job-detailed__body-main'>
						<div className='job-detailed__body-main-title'>
							<h2>{job.title}</h2>
							<div className='job-detailed__body-main-salary'>
								??? {salary}
								<span>Brutto, per year</span>
							</div>
							<DataCalculator updatedAt={job.updatedAt} classPosted={true} />
						</div>
						<JobDetailedDescription description={job.description} />
					</div>
					<div className='job-detailed__body-downbtn'>
						<button type='button'>Apply now</button>
					</div>
					<JobDetailedAdditional additional={job} sizeWidthType={sizeWidthType} />
					<div className='job-detailed__body-return'>
						<Link to="/jobList">
							<button type='button' >
								<i className="bi bi-chevron-left"></i>
								RETURN TO JOB BOARD
							</button>
						</Link>
					</div>
				</div>
				<div className='job-detailed__map'>
					<h4>Contacts</h4>
					<DetailedMap
						lat={job.location.lat}
						long={job.location.long}
						name={job.name}
						email={job.email}
						phone={job.phone}
						address={job.address}
					/>
				</div>
			</div>
		)
	}
}

export default JobDetailed;