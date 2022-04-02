import React from 'react';
import './lasTimeUpdated.css';

function TimeUpdated({ time }) {
	return (
		<>
			<div className="lastTimeUpdated__container">
				<span>Thời gian cập nhật: {time} ngày trước</span>
			</div>
		</>
	);
}

export default TimeUpdated;
