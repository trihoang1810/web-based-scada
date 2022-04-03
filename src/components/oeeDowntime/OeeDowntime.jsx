import React from 'react';
import './oeeDowntime.css';
import ProgressBar from '../progressBar/ProgressBar';
function OeeDowntime({ downtimeData }) {
	return (
		<>
			<div className="row">
				<div className="col-12">
					{downtimeData.map((item, index) => {
						return (
							<div className="row mb-30" key={index}>
								<div className="col-4 flex-left">
									<span className="downtime__details">
										{item.detail}: {item.percent}%
									</span>
								</div>
								<div className="col-8">
									<ProgressBar trend={item.trend} height="28px" percent={item.percent} />
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
