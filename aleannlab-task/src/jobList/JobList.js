
import React from 'react';
import '../css/jobList/jobList.css';
import { Link } from 'react-router-dom';
import dataResponse from '../data/dataResponse.json';
import JobListCards from './JobListCards';

var isDebug = true;

class JobList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			jobs: []
		};
	}

	componentDidMount() {
		this.loadData();
	}

	mapData = (data) => {
		this.setState({
			isLoaded: true,
			jobs: data
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
		let arrayLi = [];

		for (let index = 0; index < jobs.length; index++) {
			const element = jobs[index];
			let link = `/jobDetailed?id=${element.id}`;
			if (element.id === undefined) {
				link = '/';
			}
			arrayLi.push(
				<li key={index}>
					<Link to={link}>
						<JobListCards
							id={element.id}
							title={element.title}
							image={element.pictures[1]}
							name={element.name}
							updatedAt={element.updatedAt}
							location={element.location}
						/>
					</Link>
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
}

export default JobList;