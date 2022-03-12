import './progressBar.css';

function ProgressBar({ percent }) {
	const barClass = percent < 33.3 ? 'danger' : percent < 66.6 ? 'warming' : 'safe';
	return (
		<div className="ProgressBar">
			<div className={`ProgressBar__progress ${barClass}`} style={{ width: percent + '%' }}></div>
		</div>
	);
}

export default ProgressBar;
