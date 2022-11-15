import React from 'react';

function DataCalculator(props) {

	let dateDiff = {
		inDays: function (d1, d2) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return Math.floor((t2 - t1) / (24 * 3600 * 1000));
		}
	}

	let d1 = new Date(props.updatedAt);
	let d2 = new Date();

	return (
		<span className={((props.class === true) ? 'job-detailed__body-main-posted' : '')}> Posted {dateDiff.inDays(d1, d2)} days &nbsp;ago</span >
	)

}
export default DataCalculator;