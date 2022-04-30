import { Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import WarehouseFilterRow from '../warehouseFilterRow/WarehouseFilterRow';
import _ from 'lodash';
import './warehouseFilterForm.css';
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
function WarehouseFilterForm() {
	const [filterRows, setFilterRows] = useState([1]);
	const [filterValues, setFilterValue] = useState({ row1: {} });
	const [searchDisabled, setSearchDisabled] = useState(true);
	const [filterValuesLength, setFilterValueLength] = useState(_.size(filterValues) && 1);
	// const nowDate = new Date();
	// const toDateDefault = nowDate.toJSON().slice(0, 10);
	// nowDate.setDate(nowDate.getDate() - 7);
	// const fromDateDefault = nowDate.toJSON().slice(0, 10);

	const idList = useMemo(() => {
		const list = {};
		for (let type in fakeData) {
			list[type] = [];
			fakeData[type].forEach((item) => list[type].push(item.id));
		}
		return list;
	}, []);

	useEffect(() => {
		setFilterValueLength(_.size(filterValues));
	}, [filterValues]);

	useEffect(() => {
		const newFilterValue = {};
		filterRows.slice(filterValuesLength).forEach((row) => {
			newFilterValue[`row${row}`] = undefined;
		});
		setFilterValue((prev) => {
			return {
				...prev,
				...newFilterValue,
			};
		});
	}, [filterRows, filterValuesLength]);

	useEffect(() => {
		let isValid = false;
		for (let row in filterValues) {
			if (filterValues[row] && (filterValues[row]?.id !== '' || filterValues[row]?.name !== '')) {
				isValid = false;
			} else {
				isValid = true;
				break;
			}
		}
		setSearchDisabled(isValid);
	}, [filterValues]);

	const addFilterRow = () => {
		setFilterRows((prev) => [...prev, filterRows[filterRows.length - 1] + 1]);
	};

	const deleteFilterRow = (filterId) => {
		setFilterRows(filterRows.filter((item) => item !== filterId));
		setFilterValue((prev) => {
			const newFilterValue = { ...prev };
			delete newFilterValue[`row${filterId}`];
			return newFilterValue;
		});
	};

	const search = () => {
		console.log(filterValues);
	};

	const validationSchema = Yup.object({
		id: Yup.string()
			.required('Mã sản phẩm không được bỏ trống')
			.when('type', (type, schema) => (type ? schema.oneOf(idList[type], 'Sản phẩm không tồn tại') : schema)),
		name: Yup.string().required('Tên sản phẩm không được bỏ trống'),
		// fromDate: Yup.date().required('Ngày bắt đầu không được bỏ trống'),
		// toDate: Yup.date().when('fromDate', (fromdate, schema) =>
		// 	fromdate ? schema.min(fromdate, 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc') : schema
		// ),
	});
	return (
		<>
			<div className="card warehouseFilterForm__container">
				<form>
					<div className="row" style={{ width: '100%' }}>
						<div className="col-11">
							<div className="row warehouseFilterForm-title">
								<span className="col-4">Loại sản phẩm</span>
								<span className="col-3">Mã sản phẩm</span>
								<span className="col-4">Tên sản phẩm</span>
								{/* <span className="col-2">Từ ngày</span>
								<span className="col-2">Đến ngày</span> */}
								{filterRows.length < 5 && (
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
										// fromDate: fromDateDefault,
										// toDate: toDateDefault,
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
								className={`btn btn-primary warehouseFilterForm-btn ${searchDisabled ? 'disabled' : ''}`}
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
