import React from 'react';
import { Field } from 'formik';
import { Label } from 'reactstrap';

function Input(props) {
	const { label, name, ...rest } = props;
	return (
		<div className="form-control">
			<Label for={name}>{label}</Label>
			<Field type="text" id={name} name={name} {...rest} />
		</div>
	);
}

export default Input;
