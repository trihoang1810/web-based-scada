import React from 'react';
import './checkBox.css';

const CheckBox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = React.useRef();
	const resolvedRef = ref || defaultRef;

	React.useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate;
	}, [indeterminate, resolvedRef]);

	return (
		<>
			<input type="checkbox" ref={resolvedRef} {...rest} />
		</>
	);
});

export default CheckBox;
