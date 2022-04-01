import React from 'react';
import AlarmTable from '../components/alarmTable/AlarmTable';
import alarm_mocking from '../assets/JsonData/alarm-mocking.json';
import { CSVLink } from 'react-csv';
import { format } from 'date-fns';
import { useFormik } from 'formik';

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

	const initialDateStart = React.useMemo(() => {
		const today = new Date();
		const numberOfDaysToSubtract = 7;
		const date = today.setDate(today.getDate() - numberOfDaysToSubtract);
		return format(date, 'yyyy-MM-dd');
	});

	const initialDateEnd = React.useMemo(() => {
		const today = new Date();
		const numberOfDaysToAdd = 1;
		const date = today.setDate(today.getDate() + numberOfDaysToAdd);
		return format(date, 'yyyy-MM-dd');
	});
	const formik = useFormik({
		initialValues: {
			dateStart: initialDateStart,
			dateEnd: initialDateEnd,
			error_code: '100',
			error_sector: 'qaqc',
			priority: 'high',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	const [dataToDownload, setDataToDownload] = React.useState(alarm_mocking);

	return (
		<>
			<h2 className="page-header">CẢNH BÁO</h2>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__body">
							<div className="row">
								<div className="col-12 mb-40">
									<form onSubmit={formik.handleSubmit}>
										<label htmlFor="dateStart">Ngày bắt đầu</label>
										<input
											type="date"
											id="dateStart"
											name="dateStart"
											onChange={formik.handleChange}
											value={formik.values.dateStart}
										/>
										<label htmlFor="dateEnd">Ngày kết thúc</label>
										<input
											type="date"
											id="dateEnd"
											name="dateEnd"
											onChange={formik.handleChange}
											value={formik.values.dateEnd}
										/>
										<label htmlFor="error_code">Mã lỗi</label>
										<input
											type="text"
											id="error_code"
											name="error_code"
											onChange={formik.handleChange}
											value={formik.values.error_code}
										/>
										<label htmlFor="error_sector">Khu vực</label>
										<select
											name="error_sector"
											id="error_sector"
											onChange={formik.handleChange}
											value={formik.values.error_sector}
										>
											<option value="qaqc">Phòng QA/QC thiết bị</option>
											<option value="injection">Khu vực máy ép</option>
											<option value="package">Khu vực đóng gói</option>
											<option value="warehouse">Kho vận</option>
										</select>
										{/* <label htmlFor="priority">Mức độ ưu tiên</label>
										<input
											type="checkbox"
											id="priority"
											name="priority"
											onChange={formik.handleChange}
											value={formik.values.priority}
										>
											Cao
										</input>
										<label htmlFor="priority">Mức độ ưu tiên</label>
										<input
											type="checkbox"
											id="priority"
											name="priority"
											onChange={formik.handleChange}
											value={formik.values.priority}
										>
											Trung bình
										</input>
										<label htmlFor="priority">Mức độ ưu tiên</label>
										<input
											type="checkbox"
											id="priority"
											name="priority"
											onChange={formik.handleChange}
											value={formik.values.priority}
										>
											Thấp
										</input> */}
										<button type="submit" className="btn btn-primary">
											Tìm kiếm
										</button>
									</form>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
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
