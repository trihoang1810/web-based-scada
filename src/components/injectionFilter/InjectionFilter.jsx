import { useEffect, useState } from 'react';
import './injectionFilter.css';

function InjectionFilter({ hanldeCheckBtn, wattageFilter, stateFilter }) {
	const [showWattageFilter, setShowWattageFilter] = useState(false);
	const [showStateFilter, setShowStateFilter] = useState(false);
	useEffect(() => {
		const closePopUp = () => {
			setShowWattageFilter(false);
			setShowStateFilter(false);
		};
		document.addEventListener('click', closePopUp);

		return () => document.removeEventListener('click', closePopUp);
	}, []);

	return (
		<div className="row col-2 injectionMoldinMachinePage__filter">
			<span
				className={`col-4 ${wattageFilter.length > 0 && 'isFiltered'}`}
				onClick={(e) => {
					setShowWattageFilter(!showWattageFilter);
					e.stopPropagation();
				}}
			>
				Công suất
			</span>
			<div className={`injectionMoldinMachinePage__filter-wattage ${showWattageFilter ? 'show' : 'hide'}`}>
				<button
					onClick={(e) => hanldeCheckBtn(e, 'wattage', 'small')}
					className={`injectionMoldinMachinePage__filter-btn ${wattageFilter.includes('small') && 'btnActive'}`}
				>
					<i className="bx bx-check"></i>
					<span>Máy nhỏ</span>
				</button>
				<button
					onClick={(e) => hanldeCheckBtn(e, 'wattage', 'large')}
					className={`injectionMoldinMachinePage__filter-btn ${wattageFilter.includes('large') && 'btnActive'}`}
				>
					<i className="bx bx-check"></i>
					<span>Máy lớn</span>
				</button>
			</div>
			<span
				className={`col-4 ${stateFilter.length > 0 && 'isFiltered'}`}
				onClick={(e) => {
					setShowStateFilter(!showStateFilter);
					e.stopPropagation();
				}}
			>
				Trạng thái
			</span>
			<div className={`injectionMoldinMachinePage__filter-state ${showStateFilter ? 'show' : 'hide'}`}>
				<button
					onClick={(e) => hanldeCheckBtn(e, 'state', 'M')}
					className={`injectionMoldinMachinePage__filter-btn ${stateFilter.includes('M') && 'btnActive'}`}
				>
					<i className="bx bx-wrench"></i>
					<span>Bảo trì</span>
				</button>
				<button
					onClick={(e) => hanldeCheckBtn(e, 'state', 'R')}
					className={`injectionMoldinMachinePage__filter-btn ${stateFilter.includes('R') && 'btnActive'}`}
				>
					<i className="bx bx-play"></i>
					<span>Đang chạy</span>
				</button>
				<button
					onClick={(e) => hanldeCheckBtn(e, 'state', 'S')}
					className={`injectionMoldinMachinePage__filter-btn ${stateFilter.includes('S') && 'btnActive'}`}
				>
					<i className="bx bx-stop"></i>
					<span>Tạm dừng</span>
				</button>
			</div>
		</div>
	);
}

export default InjectionFilter;
