import React from 'react';
import { useHistory } from 'react-router-dom';

function PackingPage() {
	const mockingData = [
		{
			id: 'module1',
		},
		{
			id: 'module2',
		},
		{
			id: 'module3',
		},
		{
			id: 'module4',
		},
		{
			id: 'module5',
		},
		{
			id: 'module6',
		},
	];
	const history = useHistory();

	const handleShowDetail = (item) => history.push(`/package/${item}`);
	return (
		<div>
			{mockingData.map((item, index) => (
				<div key={index} onClick={() => handleShowDetail(item.id)}>
					<div>{item.id}</div>
				</div>
			))}
		</div>
	);
}

export default PackingPage;
