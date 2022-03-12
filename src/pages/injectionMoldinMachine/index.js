import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InjectionMoldingMachine from '../../components/injectionMoldingMachine/InjectionMoldingMachine';
import './injectionMoldinMachinePage.css';

function InjectionMoldinMachinePage() {
	const resData = [
		{
			number: 'M24',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M25',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M30',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M36',
			percent: 15,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M24',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M25',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M30',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M36',
			percent: 15,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M24',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M25',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M30',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M36',
			percent: 15,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M24',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M25',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M30',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M36',
			percent: 15,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M24',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M25',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M30',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M36',
			percent: 15,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
	];
	let quantityPrepare = { M: 0, R: 0, S: 0 };
	const [page, setPage] = useState(1);
	const [quantity, setQuantity] = useState({});
	const [sizeFilter, setSizeFilter] = useState([]);
	const [stateFilter, setStateFilter] = useState([]);
	const [filerData, setFilterData] = useState();
	const [pageData, setPageData] = useState();

	const hanldeCheckBtn = (state, payload) => {
		if (state === 'size') {
			if (sizeFilter.includes(payload)) {
				setSizeFilter(sizeFilter.filter((item) => item !== payload));
			} else {
				setSizeFilter([...sizeFilter, payload]);
			}
		} else {
			if (stateFilter.includes(payload)) {
				setStateFilter(stateFilter.filter((item) => item !== payload));
			} else {
				setStateFilter([...stateFilter, payload]);
			}
		}
	};

	useEffect(() => {
		resData.forEach((item) => {
			if (item.state === 'M') quantityPrepare.M++;
			else if (item.state === 'R') quantityPrepare.R++;
			else quantityPrepare.S++;
		});
		setQuantity(quantityPrepare);
	}, []);

	useEffect(() => {
		let sizeFilterData, stateFilterData;
		if (sizeFilter.length !== 0) {
			sizeFilterData = resData.filter((item) => sizeFilter.includes(item.size));
			setFilterData(sizeFilterData);
		}
		if (stateFilter.length !== 0) {
			stateFilterData = resData.filter((item) => stateFilter.includes(item.state));
			setFilterData(stateFilterData);
		}
		if (sizeFilterData && stateFilterData) {
			setFilterData(sizeFilterData.filter((item) => stateFilterData.includes(item)));
		}
		if (!(sizeFilterData || stateFilterData)) {
			setFilterData(resData);
		}
	}, [sizeFilter, stateFilter]);

	useEffect(() => {
		if (filerData) {
			setPageData(filerData.filter((item, index) => index >= 12 * (page - 1) && index < page * 12 && item));
		}
	}, [page, filerData]);

	return (
		<>
			<h2 className="page-header">KHU MÁY ÉP</h2>
			<div className="injectionMoldinMachinePage__control">
				<div className="injectionMoldinMachinePage__quantity">
					<div className="injectionMoldinMachinePage__quantity-item">
						<div className="M">M</div>
						<span>{quantity.M}</span>
					</div>
					<div className="injectionMoldinMachinePage__quantity-item">
						<div className="R">R</div>
						<span>{quantity.R}</span>
					</div>
					<div className="injectionMoldinMachinePage__quantity-item">
						<div className="S">S</div>
						<span>{quantity.S}</span>
					</div>
				</div>
				<div className="injectionMoldinMachinePage__filter">
					<div className="injectionMoldinMachinePage__filter-size">
						<button
							onClick={() => hanldeCheckBtn('size', 'small')}
							className={`injectionMoldinMachinePage__filter-btn ${sizeFilter.includes('small') && 'active'}`}
						>
							<i className="bx bx-check"></i>
							<span>Máy nhỏ</span>
						</button>
						<button
							onClick={() => hanldeCheckBtn('size', 'large')}
							className={`injectionMoldinMachinePage__filter-btn ${sizeFilter.includes('large') && 'active'}`}
						>
							<i className="bx bx-check"></i>
							<span>Máy lớn</span>
						</button>
					</div>
					<div className="injectionMoldinMachinePage__filter-state">
						<button
							onClick={() => hanldeCheckBtn('state', 'M')}
							className={`injectionMoldinMachinePage__filter-btn ${stateFilter.includes('M') && 'active'}`}
						>
							<i className="bx bx-wrench"></i>
							<span>Bảo trì</span>
						</button>
						<button
							onClick={() => hanldeCheckBtn('state', 'R')}
							className={`injectionMoldinMachinePage__filter-btn ${stateFilter.includes('R') && 'active'}`}
						>
							<i className="bx bxs-right-arrow"></i>
							<span>Hoạt động</span>
						</button>
						<button
							onClick={() => hanldeCheckBtn('state', 'S')}
							className={`injectionMoldinMachinePage__filter-btn ${stateFilter.includes('S') && 'active'}`}
						>
							<i className="bx bx-stop"></i>
							<span>Không hoạt động</span>
						</button>
					</div>
				</div>
			</div>

			<div className="clearfix"></div>
			{page > 1 && (
				<div onClick={() => setPage(page - 1)} className="injectionMoldinMachinePage__navigate previousPage">
					<i className="bx bxs-chevron-left"></i>
				</div>
			)}

			<div onClick={() => setPage(page + 1)} className="injectionMoldinMachinePage__navigate nextPage">
				<i className="bx bxs-chevron-right"></i>
			</div>

			<div className="row injectionMoldinMachines__container">
				{pageData &&
					pageData.map((item, index) => <InjectionMoldingMachine injectionMoldingMachineData={item} key={index} />)}
			</div>
		</>
	);
}

export default InjectionMoldinMachinePage;
