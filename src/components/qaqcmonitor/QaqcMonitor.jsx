import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StoppedForcedEndurance } from '../../assets/images/qaqc/forcedEndurance__stop.svg';
import { ReactComponent as RunForcedEndurance } from '../../assets/images/qaqc/forcedEndurance__run.svg';

import { ReactComponent as StoppedEndurance } from '../../assets/images/qaqc/endurance__stop.svg';
import { ReactComponent as RunEndurance } from '../../assets/images/qaqc/endurance__run.svg';

import './qaqcmonitor.css';

QaqcMonitor.propTypes = {
	paramsTitle: PropTypes.array,
	params: PropTypes.array,
	forcedEndurance: PropTypes.string,
	endurance: PropTypes.string,
	led: PropTypes.object,
};

function QaqcMonitor(props) {
	const { paramsTitle, params, forcedEndurance, endurance, led } = props;
	const [forcedEnduranceState, setForcedEnduranceState] = React.useState('forcedEndurance__stop');
	const [enduranceState, setEnduranceState] = React.useState('endurance__stop');

	const [ledState, setLedState] = React.useState({
		isRunning: 'false',
		isAlarm: 'false',
	});
	React.useEffect(() => {
		setLedState(led);
	}, [led]);
	React.useEffect(() => {
		setForcedEnduranceState(forcedEndurance);
	}, [forcedEndurance]);
	React.useEffect(() => {
		setEnduranceState(endurance);
	}, [endurance]);
	return (
		<div>
			<div className="row">
				<div className="col-8 flex-center">
					<div className="row full-width">
						<div className="col-8 flex-left">
							{paramsTitle.map((item, index) => (
								<p key={index}>{item}</p>
							))}
						</div>
						<div className="col-4">
							{params.map((item, index) => (
								<div key={index} className="card__params-container">
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>
					<hr className="divider middle" />
					<div className="row full-width">
						<div className="col-6 flex-space-between">
							<div className="body__led-box">
								<div
									style={{
										backgroundColor: ledState.isRunning === 'true' ? '#00ff00' : '#a5a5a5',
									}}
									className="body__led"
								></div>
								<div className="body__led-title">đang chạy</div>
							</div>
						</div>
						<div className="col-6">
							<div className="body__led-box">
								<div
									style={{
										backgroundColor: ledState.isAlarm === 'true' ? 'red' : '#a5a5a5',
									}}
									className="body__led"
								></div>
								<div className="body__led-title">cảnh báo</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-4 flex-center">
					{forcedEnduranceState === 'forcedEndurance__run' ? (
						<RunForcedEndurance width="70%" height="300" />
					) : (
						<StoppedForcedEndurance width="70%" height="300" />
					)}
					{enduranceState === 'forcedEndurance__run' ? (
						<RunEndurance width="70%" height="300" />
					) : (
						<StoppedEndurance width="70%" height="300" />
					)}
				</div>
			</div>
		</div>
	);
}

export default QaqcMonitor;
