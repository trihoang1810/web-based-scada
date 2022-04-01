import React from 'react';
import AlarmTable from '../components/alarmTable/AlarmTable';
import alarm_mocking from '../assets/JsonData/alarm-mocking.json';
import { CSVLink } from 'react-csv';
import { format } from 'date-fns';
function Alarm() {
	const headers = React.useMemo(
		() => [
			{ label: 'Thời gian', key: 'date' },
			{ label: 'Mã lỗi', key: 'error_code' },
			{ label: 'Nội dung', key: 'error_msg' },
			{ label: 'Khu vực', key: 'error_sector' },
			{ label: 'Mức độ ưu tiên', key: 'priority' },
		],
		[]
	);
	const [dataToDownload, setDataToDownload] = React.useState(alarm_mocking);
	return (
		<>
			<h2 className="page-header">CẢNH BÁO</h2>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__body">
							<div className="row">
								<div className="col-12 mb-40">Filter here</div>
							</div>
							<div>
								<CSVLink
									style={{
										color: '#fff',
										backgroundColor: 'var(--second-color)',
										borderRadius: '5px',
										padding: '10px 15px',
										textDecoration: 'none',
										display: 'inline-block',
										marginBottom: '20px',
										marginRight: '20px',
										fontSize: '14px',
										lineHeight: '20px',
										border: '1px solid var(--second-color)',
										cursor: 'pointer',
										textAlign: 'center',
										verticalAlign: 'middle',
										whiteSpace: 'nowrap',
										textTransform: 'uppercase',
										fontWeight: 'bold',
										letterSpacing: '1px',
										boxShadow: '1px 2px 2px 0 #ddd',
									}}
									filename={`Cảnh báo ${format(Date.now(), 'dd-MM-yyyy HH:mm:ss')}.csv`}
									target="_blank"
									headers={headers}
									data={dataToDownload}
								>
									Tải xuống cảnh báo
								</CSVLink>
							</div>
							<div className="row">
								<div className="col-12">
									<AlarmTable alarmData={alarm_mocking} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Alarm;
