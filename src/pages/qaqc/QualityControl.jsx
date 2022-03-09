import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import QaqcMonitor from '../../components/qaqcmonitor/QaqcMonitor';

function QualityControl() {
	const match = useRouteMatch();
	return (
		<>
			<h2 className="page-header">Phòng QA/QC thiết bị</h2>
			<div className="row">
				<div className="col-6">
					<div className="card">
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
								machine={'forcedEndurance__stop'}
								led={{
									isRunning: 'true',
									isAlarm: 'false',
								}}
							/>
						</div>
						<div className="card__footer">
							<Link to={`${match.url}/m1`}>Xem thêm</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Kiểm tra độ biến dạng</h3>
						</div>
						<div className="card__body"></div>
						<div className="card__footer">
							<Link to={`${match.url}/m2`}>Xem thêm</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Kiểm tra độ bền êm</h3>
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
								forcedEndurance={'endurance__stop'}
								led={{
									isRunning: 'true',
									isAlarm: 'false',
								}}
							/>
						</div>
						<div className="card__footer">
							<Link to={`${match.url}/m3`}>Xem thêm</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Kiểm tra chống thấm</h3>
						</div>
						<div className="card__body">4</div>
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
