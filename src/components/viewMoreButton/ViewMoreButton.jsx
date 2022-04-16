import React from 'react';
import { useHistory } from 'react-router-dom';
import './viewMoreButton.css';
function ViewMoreButton({ link, ...props }) {
	const history = useHistory();

	const onClick = () => {
		history.push(link);
	};
	return (
		<>
			<button onClick={onClick} type="button" className="view-more-button" {...props}>
				<i className="bx bx-chevrons-right view-more-button__text"></i>
				<span className="view-more-button__text">Xem thêm</span>
			</button>
		</>
	);
}

export default ViewMoreButton;
