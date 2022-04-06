import { ErrorMessage, Formik, useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../formControl/FormControl';
import './warehouseFilterRow.css';

function WarehouseFilter({ filterId, deleteFilterRow, filterValues, setFilterValue, data }) {
	const [ids, setIds] = useState();

	const { values, handleChange, setFieldValue, handleSubmit, isSubmitting, isValid } = useFormikContext();

	const { type, id, name, fromDate, toDate } = values;

	useEffect(() => {
		if (type.length > 0) {
			setIds(data[type].map((item) => item.id));
		}
	}, [type]);

	useEffect(() => {
		let filterName;
		if (type && id) {
			filterName = data[type].filter((item) => item.id === id && item.name)[0]?.name;
		}
		if (filterName) {
			setFieldValue('name', filterName);
		} else {
			setFieldValue('name', '');
		}
	}, [id, type]);

	useEffect(() => {
		setFilterValue({
			...filterValues,
			['row' + filterId]: { id, fromDate, toDate },
		});
	}, [id, fromDate, toDate]);

	return (
		<div className="row warehouseFilterRow__container">
			<>
				<div className="col-3">
					<FormikControl
						control="select"
						name="type"
						onChange={handleChange}
						options={[{ value: '' }, { key: 'Bộ xả', value: 'discharger' }, { key: 'Nắp bàn cầu', value: 'lid' }]}
					/>
				</div>

				<div className="col-2">
					<FormikControl control="input" list={`list${filterId}`} name="id" onChange={handleChange} />

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

				<div className="col-2">
					<FormikControl name="name" control="input" disable={true} />
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
