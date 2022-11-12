import React from 'react';
import './css/page.css';
import JobDetailed from './jobDetailed/JobDetailed';
import JobList from './jobList/JobList';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<main className='main'>
					{/* <JobList/>*/} 
					<JobDetailed/>
				</main>
			</div>
		</div>
	);
}

export default App;
