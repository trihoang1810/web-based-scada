import { Field } from 'formik';
import React from 'react';
function DatePicker(props) {
	const { name, label, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field type="date" id={name} name={name} {...rest} />
		</div>
	);
}

export default DatePicker;
