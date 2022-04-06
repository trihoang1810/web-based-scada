import { useState, useEffect, useMemo } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import WarehouseFilterRow from '../warehouseFilterRow/WarehouseFilterRow';
import './warehouseFilterForm.css';

function WarehouseFilterForm() {
	const [filterRows, setFilterRows] = useState([1]);
	const [filterValues, setFilterValue] = useState({ row1: {} });
	const [searchDisabled, setSearchDisabled] = useState(true);

	const nowDate = new Date();
	const toDateDefault = nowDate.toJSON().slice(0, 10);
	nowDate.setDate(nowDate.getDate() - 7);
	const fromDateDefault = nowDate.toJSON().slice(0, 10);

	const fakeData = {
		discharger: [
			{
				name: 'Bộ xả 1',
				id: 'M1',
			},
			{
				name: 'Bộ xả 2',
				id: 'M2',
			},
			{
				name: 'Bộ xả 3',
				id: 'M3',
			},
		],
		lid: [
			{
				name: 'nắp 1',
				id: 'L1',
			},
			{
				name: 'nắp 2',
				id: 'L2',
			},
			{
				name: 'nắp 3',
				id: 'L3',
			},
		],
	};

	const idList = useMemo(() => {
		const list = {};
		for (let type in fakeData) {
			list[type] = [];
			for (let item of fakeData[type]) {
				list[type].push(item.id);
			}
		}
		return list;
	}, []);

	const addFilterRow = () => {
		setFilterRows([...filterRows, filterRows[filterRows.length - 1] + 1]);
	};

	const deleteFilterRow = (filterId) => {
		setFilterRows(filterRows.filter((item) => item != filterId));
	};

	const search = () => {
		console.log(filterValues);
	};

	useEffect(() => {
		const newFilterValue = {};
		filterRows.forEach((row) => (newFilterValue[`row${row}`] = filterValues[`row${row}`]));
		setFilterValue(newFilterValue);
	}, [filterRows]);

	const validationSchema = Yup.object({
		type: '',
		id: Yup.string().required('Mã sản phẩm không được bỏ trống'),
		fromDate: Yup.date().required('Ngày bắt đầu không được bỏ trống'),
		toDate: Yup.date().when('fromDate', (fromdate, schema) =>
			fromdate ? schema.min(fromdate, 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc') : schema
		),
	});

	return (
		<>
			<div className="card warehouseFilterForm__container">
				<Formik>
					<Form>
						<div className="row" style={{ width: '100%' }}>
							<div className="col-10">
								<div className="row warehouseFilterForm-title">
									<span className="col-2">Loại sản phẩm</span>
									<span className="col-2">Mã sản phẩm</span>
									<span className="col-3">Tên sản phẩm</span>
									<span className="col-2">Từ ngày(mm/dd/yyyy)</span>
									<span className="col-2">Đến ngày(mm/dd/yyyy)</span>
								</div>

								{filterRows.map((rowId) => (
									<Formik
										key={rowId}
										validationSchema={validationSchema}
										initialValues={{
											type: '',
											id: '',
											fromDate: fromDateDefault,
											toDate: toDateDefault,
										}}
									>
										<WarehouseFilterRow
											filterId={rowId}
											deleteFilterRow={filterRows.length > 1 && deleteFilterRow}
											filterValues={filterValues}
											setFilterValue={setFilterValue}
											data={fakeData}
											setSearchDisabled={setSearchDisabled}
										/>
									</Formik>
								))}
							</div>

							<div className="col-2 flex-horizontal-center">
								{filterRows.length < 3 && (
									<div className="warehouseFilterForm-addBtn flex-center" onClick={addFilterRow}>
										<i className="bx bx-plus-circle"></i>
									</div>
								)}
								<button type="button" className="btn warehouseFilterForm-btn" onClick={search}>
									Tìm
								</button>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	);
}

export default WarehouseFilterForm;
