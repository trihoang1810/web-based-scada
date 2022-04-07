import React from 'react';
import './injectionMap.css';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as VerticalMachine } from '../../../assets/images/compressor/vertical_injection_machine.svg';
import { ReactComponent as HorizontalMachine } from '../../../assets/images/compressor/compressor.svg';
import ReportNavigationButton from '../../../components/reportNavigationButton/ReportNavigationButton';

const INJECTION_MACHINE_LAYOUT = [
	[
		{
			title: 'M28',
			isHaitian: false,
			subTitle: 'SM150',
		},
		{
			title: 'M26',
			isHaitian: true,
			subTitle: 'MA90',
			url: '/injection/m26',
		},
		{
			title: 'M24',
			isHaitian: true,
			subTitle: 'MA120',
			url: '/injection/m24',
		},
		{
			title: 'M22',
			isHaitian: true,
			subTitle: 'MA90',
			url: '/injection/m22',
		},
		{
			title: 'M20',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m20',
		},
		{
			title: 'M18',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m18',
		},
		{
			title: 'M16',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m16',
		},
		{
			title: 'M14',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m14',
		},
		{
			title: 'M12',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m12',
		},
		{
			title: 'M10',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m10',
		},
		{
			title: 'M8',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m8',
		},
		{
			title: 'M6',
			isHaitian: true,
			subTitle: 'MA120',
			url: '/injection/m6',
		},
		{
			title: 'M4',
			isHaitian: true,
			subTitle: 'ZE90',
			url: '/injection/m4',
		},
		{
			title: 'M2',
			isHaitian: false,
			subTitle: 'TMC\n200ES',
		},
	],
	[
		{
			title: 'M27',
			isHaitian: false,
			subTitle: 'TMC\n250ES',
		},
		{
			title: 'M25',
			isHaitian: true,
			subTitle: 'MA90',
			url: '/injection/m25',
		},
		{
			title: 'M23',
			isHaitian: true,
			subTitle: 'MA120',
			url: '/injection/m23',
		},
		{
			title: 'M21',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m21',
		},
		{
			title: 'M19',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m19',
		},
		{
			title: 'M17',
			isHaitian: true,
			subTitle: 'MA160',
			url: '/injection/m17',
		},
		{
			title: 'M15',
			isHaitian: true,
			subTitle: 'MA250',
			url: '/injection/m15',
		},
		{
			title: 'M13',
			isHaitian: true,
			subTitle: 'MA250',
			url: '/injection/m13',
		},
		{
			title: 'M11',
			isHaitian: true,
			subTitle: 'MA250',
			url: '/injection/m11',
		},
		{
			title: 'M9',
			isHaitian: true,
			subTitle: 'MA250',
			url: '/injection/m9',
		},
		{
			title: 'M7',
			isHaitian: true,
			subTitle: 'MA250',
			url: '/injection/m7',
		},
		{
			title: 'M5',
			subTitle: 'MA120',
			isHaitian: true,
			url: '/injection/m5',
		},
		{
			title: 'M3',
			isHaitian: true,
			subTitle: 'ZE90',
			url: '/injection/m3',
		},
		{
			title: 'M1',
			isHaitian: false,
			subTitle: 'CLF\n125T',
		},
	],
	[
		[
			{
				title: 'L6',
				isHaitian: false,
				subTitle: 'CLF 800T',
			},
			{
				title: 'L7',
				isHaitian: false,
				subTitle: 'JM 600-C',
			},
			{
				title: 'L8',
				isHaitian: false,
				subTitle: 'HC 800',
			},
			{
				title: 'L9',
				isHaitian: false,
				subTitle: 'JSW 850EII',
			},
			{
				title: 'L10',
				isHaitian: false,
				subTitle: 'JSW J850E-C5',
			},
			{
				title: 'L11',
				isHaitian: false,
				subTitle: 'JSW 850EII',
			},
			{
				title: 'L12',
				isHaitian: true,
				subTitle: 'MAII 700',
				url: '/injection/l12',
			},
		],
		[
			{
				title: 'L5',
				isHaitian: true,
				subTitle: 'MAIII 1000',
				url: '/injection/l5',
			},
			{
				title: 'L4',
				isHaitian: true,
				subTitle: 'MAII 800',
				url: '/injection/l4',
			},
			{
				title: 'L3',
				isHaitian: true,
				subTitle: 'MAII 1000',
				url: '/injection/l3',
			},
			{
				title: 'L2',
				isHaitian: true,
				subTitle: 'MAIII 1000',
				url: '/injection/l2',
			},
			{
				title: 'L1',
				isHaitian: true,
				subTitle: 'MAII 800',
				url: '/injection/l1',
			},
		],
	],
];

function InjectionMap() {
	const history = useHistory();
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__header">
							<h3>KHU VỰC MÁY ÉP</h3>
						</div>
						<div className="card__body">
							<div className="injection-map__container">
								<div className="injection-map__map">
									<div className="injection-map__map-first-row">
										<div className="injection-map__map-item">
											{INJECTION_MACHINE_LAYOUT[0].map((item, index) => {
												return (
													<React.Fragment key={index}>
														{item.isHaitian ? (
															<Link className="injection-map__map-item-inner" to={item.url}>
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<VerticalMachine height="100px" width="auto" />
																</div>
															</Link>
														) : (
															<div className="injection-map__map-item-inner injection-map__map-item-inner--none-haitian">
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<VerticalMachine height="100px" width="auto" />
																</div>
															</div>
														)}
													</React.Fragment>
												);
											})}
										</div>
									</div>
									<div className="injection-map__map-second-row">
										<div className="injection-map__map-item">
											{INJECTION_MACHINE_LAYOUT[1].map((item, index) => {
												return (
													<React.Fragment key={index}>
														{item.isHaitian ? (
															<Link className="injection-map__map-item-inner" to={item.url}>
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<VerticalMachine height="100px" width="auto" />
																</div>
															</Link>
														) : (
															<div className="injection-map__map-item-inner injection-map__map-item-inner--none-haitian">
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<VerticalMachine height="100px" width="auto" />
																</div>
															</div>
														)}
													</React.Fragment>
												);
											})}
										</div>
									</div>
									<div className="injection-map__map-third-row">
										<div className="injection-map__map-first-column">
											{INJECTION_MACHINE_LAYOUT[2][0].map((item, index) => {
												return (
													<React.Fragment key={index}>
														{item.isHaitian ? (
															<Link className="injection-map__map-item-inner--horizontal" to={item.url}>
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<HorizontalMachine height="auto" width="200px" />
																</div>
															</Link>
														) : (
															<div className="injection-map__map-item-inner--horizontal injection-map__map-item-inner--none-haitian">
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<HorizontalMachine height="auto" width="200px" />
																</div>
															</div>
														)}
													</React.Fragment>
												);
											})}
										</div>
										<div className="injection-map__map-second-column">
											{INJECTION_MACHINE_LAYOUT[2][1].map((item, index) => {
												return (
													<React.Fragment key={index}>
														{item.isHaitian ? (
															<Link className="injection-map__map-item-inner--horizontal" to={item.url}>
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<HorizontalMachine height="auto" width="200px" />
																</div>
															</Link>
														) : (
															<div className="injection-map__map-item-inner--horizontal injection-map__map-item-inner--none-haitian">
																<div className="injection-map__map-item-title">{item.title}</div>
																{item.subTitle.includes('\n') ? (
																	<div className="injection-map__map-item-sub-title">
																		{item.subTitle.split('\n').map((subTitle, index) => {
																			return (
																				<React.Fragment key={index}>
																					{subTitle}
																					{index !== item.subTitle.split('\n').length - 1 ? <br /> : null}
																				</React.Fragment>
																			);
																		})}
																	</div>
																) : (
																	<div className="injection-map__map-item-sub-title">{item.subTitle}</div>
																)}
																<div className="injection-map__machine-container">
																	<HorizontalMachine height="auto" width="200px" />
																</div>
															</div>
														)}
													</React.Fragment>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card__footer">
							<div className="row mb-10">
								<div className="col-12">
									<ReportNavigationButton history={history} path="/injection/pages/1">
										Xem dưới dạng bảng
									</ReportNavigationButton>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<ReportNavigationButton history={history} path="/report/main/injection" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InjectionMap;
