import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import InjectionFilter from '../../components/injectionFilter/InjectionFilter';
import InjectionMoldingMachine from '../../components/injectionMoldingMachine/InjectionMoldingMachine';
import InjectionStateNote from '../../components/injectionStateNote/InjectionStateNote';
import './injectionMoldinMachinePage.css';

function InjectionMoldinMachinePage() {
	const resData = [
		{
			number: 'M1',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M2',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M3',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M4',
			percent: 15,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M5',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M6',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'm7',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'm8',
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
			number: 'M1',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M2',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M3',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'M4',
			percent: 15,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M5',
			percent: 30,
			state: 'R',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'small',
		},
		{
			number: 'M6',
			percent: 50,
			state: 'M',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'm7',
			percent: 78,
			state: 'S',
			cycle: '30 giây',
			openDoorTime: '7 giây',
			operatingTime: '1 tiếng 15 phút',
			size: 'large',
		},
		{
			number: 'm8',
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
	];
	const pageSize = window.screen.width >= 1280 ? 12 : window.screen.width >= 500 ? 6 : 100;
	let quantityPrepare = { M: 0, R: 0, S: 0 };
	const param = useParams();
	const history = useHistory();
	const [page, setPage] = useState(+param.page);
	const [pages, setPages] = useState();
	const [quantity, setQuantity] = useState({});
	const [sizeFilter, setSizeFilter] = useState([]);
	const [stateFilter, setStateFilter] = useState([]);
	const [filterData, setFilterData] = useState();
	const [pageData, setPageData] = useState();

	const hanldeCheckBtn = (e, state, payload) => {
		e.stopPropagation();
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
		history.push(`/injection/${page}`);
	}, [page]);

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
		if (filterData) {
			let pagesArr = [];
			for (let i = 1; i <= filterData.length / pageSize + 1; i++) {
				pagesArr.push(i);
			}
			setPages(pagesArr);
		}
	}, [filterData]);

	useEffect(() => {
		if (filterData) {
			setPageData(
				filterData.filter((item, index) => index >= pageSize * (page - 1) && index < page * pageSize && item)
			);
		}
	}, [page, filterData]);

	return (
		<div className="injectionMoldinMachinePage__container">
			<h2 className="page-header">KHU MÁY ÉP</h2>

			<div className="row injectionMoldinMachinePage__control">
				<div className="col-7 col-md-6 col-sm-4"></div>
				<InjectionStateNote quantity={quantity} />
				<div className="col-sm-2 col-md-4"></div>
				<InjectionFilter hanldeCheckBtn={hanldeCheckBtn} sizeFilter={sizeFilter} stateFilter={stateFilter} />
			</div>
			<div className="col-sm-12 col-md-12 injectionMoldinMachinePage__pageIndex">
				{pages &&
					pages.map((pageIndex) => (
						<div
							key={pageIndex}
							className={`injectionMoldinMachinePage__pageIndex-part ${pageIndex === page && 'pageIndexActive'}`}
						></div>
					))}
			</div>
			{page > 1 && (
				<div onClick={() => setPage(page - 1)} className="injectionMoldinMachinePage__navigate previousPage">
					<i className="bx bxs-chevron-left"></i>
				</div>
			)}

			{filterData && page <= filterData.length / pageSize && (
				<div onClick={() => setPage(page + 1)} className="injectionMoldinMachinePage__navigate nextPage">
					<i className="bx bxs-chevron-right"></i>
				</div>
			)}

			<div className="row injectionMoldinMachines__container">
				{pageData &&
					pageData.map((item, index) => <InjectionMoldingMachine injectionMoldingMachineData={item} key={index} />)}
			</div>
		</div>
	);
}

export default InjectionMoldinMachinePage;
