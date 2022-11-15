import React from 'react';
import './css/page.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetailed from './jobDetailed/JobDetailed';
import JobList from './jobList/JobList';

function App() {
	return (
		<div className="wrapper">
			<div className='page'>
				<BrowserRouter >
					{/* <BrowserRouter basename="/AleannLab-task"> */}
					<main className='main'>
						<Routes>
							<Route exact path="/" element={<JobList />} />
							<Route exact path="jobList" element={<JobList />} />
							<Route path="/jobDetailed" element={<JobDetailed />} exact />
						</Routes>
					</main>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
