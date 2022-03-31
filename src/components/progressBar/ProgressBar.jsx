import './progressBar.css';

function ProgressBar({ percent, width, height }) {
	const barClass = percent < 33.3 ? 'danger' : percent < 66.6 ? 'warming' : 'safe';
	return (
		<div
			title={Math.floor(percent).toString() + '%'}
			style={{
				width: width ? width : '100%',
				height: height ? height : '100%',
			}}
			className="ProgressBar"
		>
			<div className={`ProgressBar__progress ${barClass}`} style={{ width: percent + '%', fontSize: '10px' }}></div>
		</div>
	);
}

export default ProgressBar;
