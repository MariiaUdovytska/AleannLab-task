import React from 'react';
import { Link } from 'react-router-dom';
import '../css/jobDetailed/jobDetailed.css';
import dataResponse from '../data/dataResponse.json';
import DataCalculator from '../dataCalculator/DataCalculator';
import JobDetailedAdditional from './JobDetailedAdditional';
import JobDetailedDescription from './JobDetailedDescription';

var isDebug = false;

class JobDetailed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			sizeWidthType: 'desktop',
			jobs: []
		};
	}

	getWindowDimensions = () => {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = () => {
		let width = this.getWindowDimensions()
		if (width <= 626)
			this.setState({ sizeWidthType: 'tablet' });
		else
			this.setState({ sizeWidthType: 'desktop' });
	}

	componentDidMount() {
		this.loadData();
		this.handleWindowDimensions();
		window.addEventListener('resize', this.handleWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowDimensions);
	}

	mapData = (data) => {
		this.setState({
			isLoaded: true,
			jobs: data,
		});
	}
	loadData = () => {

		if (isDebug) {
			this.mapData(dataResponse);
			return;
		}

		console.log("get data from api!!");
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
						.then(this.mapData);
				}
				throw new Error(`ничего не найдено`);
			})
			.catch(err => {
				this.setState({
					isLoaded: true,
					error: err
				});
			});
	}

	render() {
		const { error, isLoaded, jobs } = this.state;

		if (error) {
			return <p> Error {error.message}</p>
		} else if (!isLoaded) {
			return <p> Loading...</p>
		} else {
			const job = jobs[0];
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
									€ {job.salary}
									<span>Brutto, per year</span>
								</div>
								<DataCalculator updatedAt={job.updatedAt} class={true} />
							</div>
							<JobDetailedDescription description={job.description} />
						</div>
						<div className='job-detailed__body-downbtn'>
							<button type='button'>Apply now</button>
						</div>
						<JobDetailedAdditional additional={job} sizeWidthType={this.state.sizeWidthType} />
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
						m ea enim consectetur sit magna minim ea cupidatat. Et ut proident voluptate quis nulla anim commodo in pariat
					</div>
				</div>
			)
		}
	}
}

export default JobDetailed;