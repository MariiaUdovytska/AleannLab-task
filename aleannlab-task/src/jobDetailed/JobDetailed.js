import React from 'react';
import '../css/jobDetailed/jobDetailed.css';
import dataResponse from '../data/dataResponse.json';

var isDebug = false;

class JobDetailed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			jobs: [],
		};
	}

	componentDidMount() {
		this.loadData();
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
		const job = jobs[0];
		if (error) {
			return <p> Error {error.message}</p>
		} else if (!isLoaded) {
			return <p> Loading...</p>
		} else {
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
								<span className='job-detailed__body-main-posted'>Posted 2 days ago</span>
							</div>

							<p>{job.description}</p>

						</div>
						<div className='job-detailed__body-downbtn'>
							<button type='button'>Apply now</button>
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