import './progressBar.css';

function ProgressBar({ percent, width, height, trend }) {
	const barClass = percent < 33.3 ? 'danger' : percent < 66.6 ? 'warming' : 'safe';
	return (
		<>
			<div
				style={{
					width: width ? width : '100%',
					height: height ? height : '100%',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div title={Math.floor(percent).toString() + '%'} className="ProgressBar">
					<div className={`ProgressBar__progress ${barClass}`} style={{ width: percent + '%', fontSize: '10px' }}></div>
				</div>
				{trend && trend === 'up' ? (
					<i class="ProgressBar__trend ProgressBar__trend--up bx bxs-right-arrow"></i>
				) : trend === 'down' ? (
					<i class="ProgressBar__trend ProgressBar__trend--down bx bxs-left-arrow"></i>
				) : null}
			</div>
		</>
	);
}

export default ProgressBar;
