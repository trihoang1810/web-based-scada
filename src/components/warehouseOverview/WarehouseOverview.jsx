import { useEffect, useState } from 'react';
import WarehouseFilter from '../warehouseFilter/WarehouseFilter';
import WarehouseResult from '../warehouseResult/WarehouseResult';
import './warehouseOverview.css';

function WarehouseOverview() {
	const [filterRows, setFilterRows] = useState([1]);
	const [filterValues, setFilterValue] = useState({ row1: {} });
	const [searchDisabled, setSearchDisabled] = useState(true);

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

	useEffect(() => {
		const newFilterValue = {};
		filterRows.forEach((row) => (newFilterValue[`row${row}`] = filterValues[`row${row}`]));
		setFilterValue(newFilterValue);
	}, [filterRows]);

	// check all the filter inputs are filled and enalble search btn
	useEffect(() => {
		setSearchDisabled(false);
		for (let row in filterValues) {
			if (filterValues[row]) {
				for (let key in filterValues[row]) {
					if (!filterValues[row][key]) {
						setSearchDisabled(true);
					}
				}
			} else {
				setSearchDisabled(true);
			}
		}
	}, [filterValues]);

	const addFilterRow = () => {
		setFilterRows([...filterRows, filterRows[filterRows.length - 1] + 1]);
	};

	const deleteFilterRow = (filterId) => {
		setFilterRows(filterRows.filter((item) => item != filterId));
	};

	const search = () => {
		console.log(filterValues);
	};

	return (
		<>
			<div className="card warehouseOverview__filter">
				<div className="row warehouseOverview__filter-title">
					<span className="col-2">Loại sản phẩm</span>
					<span className="col-2">Mã sản phẩm</span>
					<span className="col-3">Tên sản phẩm</span>
					<span className="col-2">Từ ngày(mm/dd/yyyy)</span>
					<span className="col-2">Đến ngày(mm/dd/yyyy)</span>
				</div>
				{filterRows.map((rowId) => (
					<WarehouseFilter
						filterId={rowId}
						key={rowId}
						deleteFilterRow={filterRows.length > 1 && deleteFilterRow}
						filterValues={filterValues}
						setFilterValue={setFilterValue}
						data={fakeData}
						setSearchDisabled={setSearchDisabled}
					/>
				))}

				{filterRows.length < 3 && (
					<div className="warehouseOverview__filter-addBtn" onClick={addFilterRow}>
						<i className="bx bx-plus-circle"></i>
					</div>
				)}

				<div className="row">
					<div className="col-11">
						<button
							disabled={searchDisabled}
							className={`warehouseOverview__filter-searchBtn ${searchDisabled && 'disabled'}`}
							onClick={search}
						>
							Tìm
						</button>
					</div>
				</div>
			</div>

			<div className="warehouseOverview__result">
				<div className="row">
					<div className="col-12">
						<WarehouseResult />
					</div>
				</div>
			</div>
		</>
	);
}

export default WarehouseOverview;
