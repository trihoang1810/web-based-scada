import { Button } from '@mui/material';
import React from 'react';

function ReportNavigationButton({ history, path }) {
	const onClick = () => {
		history.push(path);
	};
	return (
		<>
			<Button onClick={onClick} variant="contained">
				Đi đến trang báo cáo
			</Button>
		</>
	);
}

export default ReportNavigationButton;
