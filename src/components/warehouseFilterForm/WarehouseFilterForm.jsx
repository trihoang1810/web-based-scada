import { useState, useEffect, useMemo } from 'react';
import { Formik } from 'formik';
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
			fakeData[type].forEach((item) => list[type].push(item.id));
		}
		return list;
	}, []);

	useEffect(() => {
		const newFilterValue = {};
		filterRows.forEach((row) => (newFilterValue[`row${row}`] = filterValues[`row${row}`]));
		setFilterValue(newFilterValue);
	}, [filterRows]);

	const addFilterRow = () => {
		setFilterRows([...filterRows, filterRows[filterRows.length - 1] + 1]);
	};

	const deleteFilterRow = (filterId) => {
		setFilterRows(filterRows.filter((item) => item !== filterId));
	};

	const search = () => {
		console.log(filterValues);
	};

	const validationSchema = Yup.object({
		id: Yup.string()
			.required('Mã sản phẩm không được bỏ trống')
			.when('type', (type, schema) => (type ? schema.oneOf(idList[type], 'Sản phẩm không tồn tại') : schema)),
		fromDate: Yup.date().required('Ngày bắt đầu không được bỏ trống'),
		toDate: Yup.date().when('fromDate', (fromdate, schema) =>
			fromdate ? schema.min(fromdate, 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc') : schema
		),
	});

	return (
		<>
			<div className="card warehouseFilterForm__container">
				<form>
					<div className="row" style={{ width: '100%' }}>
						<div className="col-11">
							<div className="row warehouseFilterForm-title">
								<span className="col-2">Loại sản phẩm</span>
								<span className="col-2">Mã sản phẩm</span>
								<span className="col-3">Tên sản phẩm</span>
								<span className="col-2">Từ ngày(mm/dd/yyyy)</span>
								<span className="col-2">Đến ngày(mm/dd/yyyy)</span>

								{filterRows.length < 3 && (
									<div className="warehouseFilterForm-addBtn col-1" onClick={addFilterRow}>
										<i className="bx bx-plus-circle"></i>
									</div>
								)}
							</div>

							{filterRows.map((rowId) => (
								<Formik
									key={rowId}
									validationSchema={validationSchema}
									initialValues={{
										type: 'discharger',
										id: '',
										name: '',
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

						<div className="col-1 flex-horizontal-center">
							<button
								type="button"
								className={`warehouseFilterForm-btn ${searchDisabled && 'disabled'}`}
								onClick={search}
								disabled={searchDisabled}
							>
								Tìm
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default WarehouseFilterForm;
