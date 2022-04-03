import React from 'react';
import Input from './text';
import CheckboxGroup from './checkBox';
import DatePicker from './datePicker';

function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'checkbox':
			return <CheckboxGroup {...rest} />;
		case 'date':
			return <DatePicker {...rest} />;
		default:
			return null;
	}
}

export default FormikControl;
