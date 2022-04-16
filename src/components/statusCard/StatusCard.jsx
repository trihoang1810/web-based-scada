import React from 'react';

import './statuscard.css';

function StatusCard(props) {
	return (
		<div
			title={props.tooltip}
			style={{
				backgroundColor: props.color,
				width: props?.width,
				height: props?.height,
				padding: props?.padding,
			}}
			className={`status-card ${props.hover ? `status-card-hover` : ``}`}
		>
			<div className="status-card__icon">
				<i className={props.icon}></i>
			</div>
			<div className="status-card__info">
				<h4
					style={{
						fontSize: props.padding ? '2rem' : '2.5rem',
					}}
				>
					{props.count}
				</h4>
				<span>{props.title}</span>
			</div>
		</div>
	);
}

export default StatusCard;
