import { Button } from '@mui/material';
import React from 'react';

function ReportNavigationButton({ children, history, path }) {
	const onClick = () => {
		history.push(path);
	};
	return (
		<>
			<Button
				sx={{
					backgroundColor: 'var(--main-color)',
				}}
				onClick={onClick}
				variant="contained"
			>
				{children ? children : 'Đi đến trang báo cáo'}
			</Button>
		</>
	);
}

export default ReportNavigationButton;
