import React from 'react';
import './columnFilter.css';

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column;
	return (
		<>
			<span>
				<input
					type="text"
					className="column-filter__input"
					value={filterValue || ''}
					onChange={(e) => setFilter(e.target.value)}
					placeholder="Tìm kiếm ở đây"
				/>
			</span>
		</>
	);
};
