import React from 'react';
import './oeeDowntime.css';
import ProgressBar from '../progressBar/ProgressBar';
function OeeDowntime({ downtimeData }) {
	return (
		<>
			<div className="row full-width">
				<div className="col-12">
					{downtimeData.map((item, index) => {
						return (
							<div className="row mb-40" key={index}>
								<div className="col-4 flex-left">
									<span className="downtime__details">
										{item.detail}: {item.percent}%
									</span>
								</div>
								<div className="col-8">
									<ProgressBar trend={item.trend} height="30px" percent={item.percent} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default OeeDowntime;
