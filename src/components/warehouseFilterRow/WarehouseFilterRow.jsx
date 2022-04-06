import { ErrorMessage, Formik, useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../formControl/FormControl';
import './warehouseFilterRow.css';

function WarehouseFilter({ filterId, deleteFilterRow, filterValues, setFilterValue, data }) {
	const [type, setType] = useState('');
	const [name, setName] = useState('');
	const [ids, setIds] = useState();

	const { values, handleChange, setFieldValue, handleSubmit, isSubmitting, isValid } = useFormikContext();

	const { id, fromDate, toDate } = values;

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
		}
	}, [id, type]);

	useEffect(() => {
		setFilterValue({
			...filterValues,
			['row' + filterId]: { id, fromDate, toDate },
		});
	}, [id, fromDate, toDate]);

	const handleChangeId = (e) => {
		const id = e.target.value;
		setFieldValue('id', id);
		handleChange(e);
	};

	return (
		<div className="row warehouseFilterRow__container">
			<>
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
					<FormikControl control="input" list={`list${filterId}`} name="id" onChange={handleChangeId} />

					{ids && (
						<datalist id={`list${filterId}`}>
							{ids.map((id) => (
								<option key={id} value={id}>
									{id}
								</option>
							))}
						</datalist>
					)}
				</div>

				<div className="col-3">
					<FormikControl value={name} control="input" disabled />
				</div>

				<div className="col-2">
					<FormikControl control="date" name="fromDate" />
				</div>

				<div className="col-2">
					<FormikControl control="date" name="toDate" />
				</div>

				{deleteFilterRow && (
					<div className="col-1 flex-center">
						<div className="deleteBtn" onClick={() => deleteFilterRow(filterId)}>
							<i className="bx bxs-x-circle"></i>
						</div>
					</div>
				)}
				<div className="row" style={{ width: '100%', textAlign: 'center' }}>
					<div className="col-12">
						<ErrorMessage name="id" component="div" className="error-message" />
					</div>
				</div>
			</>
		</div>
	);
}

export default WarehouseFilter;
