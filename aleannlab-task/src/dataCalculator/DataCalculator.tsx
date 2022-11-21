import React from 'react';

type DataCalculatorProps = {
	updatedAt: string,
	classPosted: boolean
};

function DataCalculator({updatedAt, classPosted}:DataCalculatorProps) {

	let dateDiff = {
		inDays: function (d1:Date, d2:Date) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return Math.floor((t2 - t1) / (24 * 3600 * 1000));
		}
	}

	let d1 = new Date(updatedAt);
	let d2 = new Date();

	return (
		<span className={((classPosted === true) ? 'job-detailed__body-main-posted' : '')}>Posted {dateDiff.inDays(d1, d2)} days&nbsp;ago</span >
	)

}
export default DataCalculator;