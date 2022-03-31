import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { ReactComponent as StoppedForcedEndurance } from '../../assets/images/qaqc/forcedEndurance__stop.svg';
import { ReactComponent as RunForcedEndurance } from '../../assets/images/qaqc/forcedEndurance__run.svg';

import { ReactComponent as StoppedEndurance } from '../../assets/images/qaqc/endurance__stop.svg';
import { ReactComponent as RunEndurance } from '../../assets/images/qaqc/endurance__run.svg';

import { ReactComponent as StoppedWaterProof } from '../../assets/images/qaqc/waterProof__stop.svg';
import { ReactComponent as RunWaterProof } from '../../assets/images/qaqc/waterProof__run.svg';

import { ReactComponent as StoppedDeformation } from '../../assets/images/qaqc/deformation__stop.svg';
import { ReactComponent as RunDeformation } from '../../assets/images/qaqc/deformation__run.svg';

import QaqcMonitor from '../../components/qaqcmonitor/QaqcMonitor';

function QualityControl() {
	const [forcedEndurance, setForcedEndurance] = React.useState('forcedEndurance__stop');
	const [endurance, setEndurance] = React.useState('endurance__stop');
	const [waterProof, setWaterProof] = React.useState('waterProof__stop');
	const [deformation, setDeformation] = React.useState('deformation__stop');

	const match = useRouteMatch();
	return (
		<>
			<h2 className="page-header">PHÒNG QA/QC THIẾT BỊ</h2>
			<div className="row">
				<div className="col-5 col-md-12">
					<div className="card full-height">
						<div className="card__header">
							<h3>Kiểm tra độ bền cưỡng bức</h3>
						</div>
						<div className="card__body">
							<QaqcMonitor
								paramsTitle={[
									'Thời gian dừng lên',
									'Thời gian dừng xuống',
									'Số lần đóng nắp cài đặt',
									'Số lần đóng nắp hiện tại',
								]}
								params={['0000', '0000', '0000', '0000']}
								led={{
									isRunning: 'true',
									isAlarm: 'false',
								}}
								isDeformation={false}
							>
								{forcedEndurance && forcedEndurance === 'forcedEndurance__stop' ? (
									<StoppedForcedEndurance width="70%" height="350" />
								) : (
									<RunForcedEndurance width="70%" height="350" />
								)}
							</QaqcMonitor>
						</div>
						<div className="card__footer">
							<Link to={`${match.url}/m3`}>Xem thêm</Link>
						</div>
					</div>
				</div>
				<div className="col-7 col-md-12">
					<div className="card full-height">
						<div className="card__header">
							<h3>Kiểm tra độ biến dạng</h3>
						</div>
						<div className="card__body">
							<QaqcMonitor
								paramsTitle={['1', 'Lực nén cài đặt', 'Thời gian giữ', 'Số lần cài đặt']}
								params={['0000', '0000', '0000']}
								led={{
									mode: '1',
									isRunning: 'true',
									isAlarm: 'false',
								}}
								isDeformation={true}
							>
								{deformation && deformation === 'deformation__stop' ? (
									<StoppedDeformation width="100%" height="350" />
								) : (
									<RunDeformation width="100%" height="350" />
								)}
							</QaqcMonitor>
						</div>
						<div className="card__footer">
							<Link to={`${match.url}/m1`}>Xem thêm</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6 col-md-12">
					<div className="card full-height">
						<div className="card__header">
							<h3>Kiểm tra độ bền êm</h3>
						</div>
						<div className="card__body">
							<QaqcMonitor
								paramsTitle={[
									'Thời gian chờ nắp đóng',
									'Thời gian chờ nắp mở',
									'Số lần đóng nắp cài đặt',
									'Số lần đóng nắp hiện tại',
								]}
								params={['0000', '0000', '0000', '0000']}
								led={{
									isRunning: 'true',
									isAlarm: 'false',
								}}
								isDeformation={false}
							>
								{endurance && endurance === 'endurance__stop' ? (
									<StoppedEndurance width="70%" height="350" />
								) : (
									<RunEndurance width="70%" height="350" />
								)}
							</QaqcMonitor>
						</div>
						<div className="card__footer">
							<Link to={`${match.url}/m2`}>Xem thêm</Link>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-12">
					<div className="card full-height">
						<div className="card__header">
							<h3>Kiểm tra chống thấm</h3>
						</div>
						<div className="card__body">
							<QaqcMonitor
								paramsTitle={[
									'Nhiệt độ cài đặt',
									'Nhiệt độ thực',
									'Thời gian kiểm tra cài đặt',
									'Thời gian kiểm tra thực',
								]}
								params={['0000', '0000', '0000', '0000']}
								led={{
									isRunning: 'true',
									isAlarm: 'false',
								}}
								isWaterProof={true}
								isDeformation={false}
							>
								{waterProof && waterProof === 'waterProof__stop' ? (
									<StoppedWaterProof width="100%" height="350" />
								) : (
									<RunWaterProof width="100%" height="350" />
								)}
							</QaqcMonitor>
						</div>
						<div className="card__footer">
							<Link to={`${match.url}/m4`}>Xem thêm</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default QualityControl;
