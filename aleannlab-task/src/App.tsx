import React from 'react';
import './css/page.css';
import JobList from './jobList/JobList';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<main className='main'>
					<JobList/>
				</main>
			</div>
		</div>
	);
}

export default App;
