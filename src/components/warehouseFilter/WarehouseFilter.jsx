import { useEffect, useState } from 'react';
import './warehouseFilter.css';

function WarehouseFilter({ filterId, deleteFilterRow, filterValues, setFilterValue, data, setSearchDisabled }) {
	const nowDate = new Date();

	const toDateDefault = nowDate.toJSON().slice(0, 10);
	nowDate.setDate(nowDate.getDate() - 7);
	const fromDateDefault = nowDate.toJSON().slice(0, 10);

	const [type, setType] = useState('');
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [fromDate, setFromDate] = useState('');
	const [toDate, setToDate] = useState('');
	const [ids, setIds] = useState([]);

	useEffect(() => {
		setFilterValue({
			...filterValues,
			['row' + filterId]: {
				type,
				id,
				fromDate,
				toDate,
			},
		});
	}, [type, id, fromDate, toDate]);

	useEffect(() => {
		if (type === 'discharger') {
			setIds(data.discharger.map((item) => item.id));
		} else if (type === 'lid') {
			setIds(data.lid.map((item) => item.id));
		}
	}, [type]);

	useEffect(() => {
		let filterName;
		if (type && id) {
			filterName = data[type].filter((item) => item.id === id && item.name)[0]?.name;
		}
		if (filterName) {
			setName(filterName);
			setFromDate(fromDateDefault);
			setToDate(toDateDefault);
		}
	}, [id, type]);

	// useEffect(() => {
	// 	if (type && id && name && fromDate && toDate) {
	// 		setSearchDisabled(false);
	// 	} else {
	// 		setSearchDisabled(true);
	// 	}
	// }, [type, id, name, fromDate, toDate]);

	return (
		<div className="row warehouseOverview__container">
			<div className="col-2">
				<select
					name={`type-${filterId}`}
					id={`type-${filterId}`}
					value={type}
					onChange={(e) => setType(e.target.value)}
				>
					<option value=""></option>
					<option value="discharger">Bộ xả</option>
					<option value="lid">Nắp bàn cầu</option>
				</select>
			</div>
			<div className="col-2">
				<input type="text" list={`list${filterId}`} value={id} onChange={(e) => setId(e.target.value)} />
				<datalist id={`list${filterId}`}>
					{ids.map((id) => (
						<option key={id} value={id}>
							{id}
						</option>
					))}
				</datalist>
			</div>
			<div className="col-3">
				<input value={name} type="text" disabled />
			</div>
			<div className="col-2">
				<input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
			</div>
			<div className="col-2">
				<input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
			</div>
			{deleteFilterRow && (
				<div className="col-1 deleteBtn" onClick={() => deleteFilterRow(filterId)}>
					<i className="bx bxs-x-circle"></i>
				</div>
			)}
		</div>
	);
}

export default WarehouseFilter;
