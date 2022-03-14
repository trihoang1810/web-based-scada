import { useEffect, useState } from 'react';
import './injectionFilter.css';

function InjectionFilter({ hanldeCheckBtn, sizeFilter, stateFilter }) {
	const [showSizeFilter, setShowSizeFilter] = useState(false);
	const [showStateFilter, setShowStateFilter] = useState(false);
	useEffect(() => {
		const closePopUp = () => {
			setShowSizeFilter(false);
			setShowStateFilter(false);
		};
		document.addEventListener('click', closePopUp);

		return () => document.removeEventListener('click', closePopUp);
	}, []);

	return (
		<div className="row injectionMoldinMachinePage__filter">
			<span
				className={`${sizeFilter.length > 0 && 'isFiltered'}`}
				onClick={(e) => {
					setShowSizeFilter(!showSizeFilter);
					e.stopPropagation();
				}}
			>
				Công suất
			</span>
			<div className={`injectionMoldinMachinePage__filter-size ${showSizeFilter ? 'show' : 'hide'}`}>
				<button
					onClick={(e) => hanldeCheckBtn(e, 'size', 'small')}
					className={`injectionMoldinMachinePage__filter-btn ${sizeFilter.includes('small') && 'btnActive'}`}
				>
					<i className="bx bx-check"></i>
					<span>Máy nhỏ</span>
				</button>
				<button
					onClick={(e) => hanldeCheckBtn(e, 'size', 'large')}
					className={`injectionMoldinMachinePage__filter-btn ${sizeFilter.includes('large') && 'btnActive'}`}
				>
					<i className="bx bx-check"></i>
					<span>Máy lớn</span>
				</button>
			</div>
			<span
				className={`${stateFilter.length > 0 && 'isFiltered'}`}
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
