import { FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormikControl from '../formControl/FormControl';
import './warehouseFilterRow.css';

function WarehouseFilter({ filterId, mapData, filledRows, setFilledRows }) {
	//-------------fake api-------
	const fakeData = [
		{ id: 'L1', name: 'Nắp bàn cầu đóng êm H2', quantity: 200, note: 'Không' },
		{ id: 'L2', name: 'Nắp bàn cầu đóng êm H30', quantity: 300, note: 'Không' },
		{ id: 'L3', name: 'Nắp bàn cầu đóng êm M2', quantity: 100, note: 'Không' },
		{ id: 'D1', name: 'Bộ xả D1', quantity: 250, note: 'Không' },
		{ id: 'D2', name: 'Bộ xả D2', quantity: 134, note: 'Không' },
		{ id: 'D3', name: 'Bộ xả D3', quantity: 200, note: 'Không' },
		{ id: 'D4', name: 'Bộ xả D4', quantity: 16, note: 'Không' },
	];
	//--------------------------------
	const history = useHistory();
	const [ids, setIds] = useState();
	const [canClick, setCanClick] = useState(false);

	const formik = useFormik({
		initialValues: {
			type: 'discharger',
			id: '',
			name: '',
			quantity: '',
			note: '',
		},
	});
	const { values, handleChange, setFieldValue } = formik;
	const { type, id, name, quantity, note } = values;
	useEffect(() => {
		if (type === 'discharger' || type === 'lid') {
			setIds(mapData[type].map((id) => id));
		}
	}, [type, mapData]);

	const showDetail = () => {
		history.push('/warehouse/' + id);
	};

	useEffect(() => {
		if (mapData[type].includes(id)) {
			const fielData = fakeData.filter((item) => item.id === id)[0];
			setFieldValue('name', fielData.name);
			setFieldValue('quantity', fielData.quantity);
			setFieldValue('note', fielData.note);
			if (!filledRows.includes(filterId)) {
				setFilledRows([...filledRows, filterId]);
			}
			setCanClick(true);
		} else if (id) {
			setFieldValue('name', 'Sản phẩm không tồn tại');
			setFieldValue('quantity', '');
			setFieldValue('note', '');
			if (filledRows.includes(filterId)) {
				setFilledRows(filledRows.filter((rowId) => rowId !== filterId));
			}
			setCanClick(false);
		} else {
			setCanClick(false);
		}
	}, [id, type]);

	return (
		<FormikProvider value={formik}>
			<tr onClick={canClick ? showDetail : null} className={canClick ? 'clickable' : ''}>
				<td>
					<FormikControl
						control="select"
						name="type"
						value={type}
						onChange={handleChange}
						options={[
							{ key: 'Bộ xả', value: 'discharger' },
							{ key: 'Nắp bàn cầu', value: 'lid' },
						]}
						onClick={(e) => e.stopPropagation()}
					/>
				</td>

				<td>
					<FormikControl
						control="input"
						list={`list${filterId}`}
						name="id"
						value={id}
						onChange={handleChange}
						onClick={(e) => e.stopPropagation()}
					/>

					{ids && (
						<datalist id={`list${filterId}`}>
							{ids.map((id) => (
								<option key={id} value={id}>
									{id}
								</option>
							))}
						</datalist>
					)}
				</td>

				<td>
					<FormikControl name="name" control="input" value={name} disable />
				</td>

				<td>
					<FormikControl name="quantity" control="input" value={quantity} disable />
				</td>
				<td>
					<FormikControl name="note" control="input" value={note} disable />
				</td>
			</tr>
		</FormikProvider>
	);
}

export default WarehouseFilter;
