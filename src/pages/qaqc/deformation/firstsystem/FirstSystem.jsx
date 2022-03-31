import React from 'react';
// import { IgrRadialGauge, IgrRadialGaugeRange } from 'igniteui-react-gauges';
import Chart from 'react-apexcharts';
import { ReactComponent as Stop } from '../../../../assets/images/qaqc/stop.svg';
import { ReactComponent as Manual } from '../../../../assets/images/qaqc/manual.svg';
import { ReactComponent as Auto } from '../../../../assets/images/qaqc/auto.svg';
import ProgressBar from '../../../../components/progressBar/ProgressBar';
import {
	Button,
	styled,
	TableCell,
	tableCellClasses,
	ThemeProvider,
	createTheme,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableBody,
	Paper,
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundImage: 'linear-gradient(var(--main-color), var(--second-color));',
		color: 'var(--txt-white)',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

var velocityChartOptions = {
	options: {
		chart: {
			height: 300,
			type: 'radialBar',
			offsetY: -10,
		},
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				dataLabels: {
					name: {
						fontSize: '14px',
						color: undefined,
						offsetY: 60,
					},
					value: {
						offsetY: 30,
						fontSize: '14px',
						color: 'var(--txt-color)',
						fontWeight: 'bold',
						formatter: function (val) {
							return val + 's';
						},
					},
				},
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				shadeIntensity: 0.15,
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 65, 91],
			},
		},
		stroke: {
			dashArray: 4,
		},
		labels: ['Thời gian giữ'],
	},
};

function createData(params, process2, process3) {
	return {
		params,
		process2,
		process3,
	};
}
function StyledPaper({ children }) {
	return <Paper elevation={6}>{children}</Paper>;
}

function FirstSystem() {
	const [machineState, setMachineState] = React.useState('stop');
	const [params, setParams] = React.useState({
		numbs: 0,
		force2: 0,
		time2: 0,
		force3: 0,
		time3: 0,
	});
	const [settings, setSettings] = React.useState({
		numb: 0,
		force2: 0,
		time2: 0,
		force3: 0,
		time3: 0,
		testNumber: 0,
	});
	const rows = [
		createData('Lực nhấn', settings.force2, settings.force3),
		createData('Số lần nhấn', settings.numbs, settings.numbs),
		createData('Thời gian giữ', settings.time2, settings.time3),
		createData('Bài test', settings.testNumber, settings.testNumber),
	];

	return (
		<>
			<div className="row">
				<div className="col-4">
					<div className="card full-height">
						<div className="card-body">
							<div className="row">
								<div className="col-12">
									<svg width="100%" height="300" viewBox="0 0 438 360" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_55_342)">
											<rect x="0.5" y="63.5" width="437" height="127" fill="#C4C4C4" stroke="#393939" />
											<rect x="14.5" y="78.5" width="409" height="112" fill="#FAFAFB" stroke="#393939" />
											<rect y="191" width="438" height="128" fill="#4237C1" />
											<rect x="20" y="210" width="395" height="109" fill="#FAFAFB" />
											<rect x="18" y="282" width="397" height="21" fill="#4237C1" />
											<rect
												x="213.5"
												y="201.5"
												width="169"
												height="91"
												rx="5.5"
												fill="#C4C4C4"
												stroke="#393939"
												strokeWidth="3"
											/>
											<rect x="383" y="238" width="3" height="26" rx="1.5" fill="#393939" />
											<rect x="211" y="238" width="3" height="26" rx="1.5" fill="#393939" />
											<rect
												x="283"
												y="218"
												width="8"
												height="29"
												rx="4"
												transform="rotate(-90 283 218)"
												fill="#C4C4C4"
											/>
											<rect
												x="294"
												y="216"
												width="4"
												height="15"
												rx="2"
												transform="rotate(-90 294 216)"
												fill="#888888"
											/>
											<circle cx="289" cy="214" r="2" transform="rotate(-90 289 214)" fill="#888888" />
											<rect x="281.5" y="0.5" width="156" height="62" fill="#C4C4C4" stroke="#393939" />
											<rect x="292" y="11" width="58" height="40" fill="#1F1F1F" />
											<rect x="297" y="16" width="48" height="30" fill="#6B6B6B" />
											<path
												d="M403 20H413V28C413 30.7614 410.761 33 408 33V33C405.239 33 403 30.7614 403 28V20Z"
												fill="#E2E2E2"
											/>
											<path
												d="M403 5H413V13C413 15.7614 410.761 18 408 18V18C405.239 18 403 15.7614 403 13V5Z"
												fill="#E2E2E2"
											/>
											<path
												d="M387 5H397V13C397 15.7614 394.761 18 392 18V18C389.239 18 387 15.7614 387 13V5Z"
												fill="#E2E2E2"
											/>
											<path
												d="M387 20H397V28C397 30.7614 394.761 33 392 33V33C389.239 33 387 30.7614 387 28V20Z"
												fill="#E2E2E2"
											/>
											<path
												d="M371 20H381V28C381 30.7614 378.761 33 376 33V33C373.239 33 371 30.7614 371 28V20Z"
												fill="#E2E2E2"
											/>
											<path
												d="M371 38H381V46C381 48.7614 378.761 51 376 51V51C373.239 51 371 48.7614 371 46V38Z"
												fill="#E2E2E2"
											/>
											<path
												d="M387 38H397V46C397 48.7614 394.761 51 392 51V51C389.239 51 387 48.7614 387 46V38Z"
												fill="#E2E2E2"
											/>
											<path
												d="M403 38H413V46C413 48.7614 410.761 51 408 51V51C405.239 51 403 48.7614 403 46V38Z"
												fill="#E2E2E2"
											/>
											<circle cx="376" cy="29" r="4.5" fill="#31BE00" stroke="#FAFAFB" />
											<circle cx="376" cy="46" r="4.5" fill="#31BE00" stroke="#FAFAFB" />
											<circle cx="392" cy="46" r="4.5" fill="#31BE00" stroke="#FAFAFB" />
											<circle cx="408" cy="46" r="4.5" fill="#31BE00" stroke="#FAFAFB" />
											<circle cx="408" cy="29" r="4.5" fill="#C57B26" stroke="#FAFAFB" />
											<circle cx="408" cy="29" r="4.5" fill="#C57B26" stroke="#FAFAFB" />
											<circle cx="392" cy="29" r="4.5" fill="#C52626" stroke="#FAFAFB" />
											<circle cx="392" cy="13" r="4.5" fill="#31BE00" stroke="black" />
											<circle cx="408" cy="13" r="4.5" fill="#C52626" stroke="black" />
											<path
												d="M418 20H428V28C428 30.7614 425.761 33 423 33V33C420.239 33 418 30.7614 418 28V20Z"
												fill="#E2E2E2"
											/>
											<path
												d="M418 38H428V46C428 48.7614 425.761 51 423 51V51C420.239 51 418 48.7614 418 46V38Z"
												fill="#E2E2E2"
											/>
											<circle cx="423" cy="47" r="5.75" fill="#C52626" stroke="#FF5656" strokeWidth="0.5" />
											<circle cx="423" cy="28" r="4.5" fill="black" stroke="#FAFAFB" />
											<rect x="422" y="23" width="2" height="6" rx="1" fill="#FAFAFB" />
											<rect x="210.5" y="78.5" width="19" height="112" fill="#C4C4C4" stroke="black" />
											<rect y="143" width="76" height="14" fill="#4237C1" />
											<rect x="154" y="143" width="76" height="14" fill="#4237C1" />
											<rect x="230" y="157" width="195" height="9" fill="#484848" />
											<rect x="259" y="151" width="125" height="6" fill="#4237C1" />
											<rect x="38" y="184" width="150" height="7" fill="#ff4545" />
											<rect x="253" y="184" width="153" height="7" fill="#C4C4C4" />
											<rect x="25" y="78" width="42" height="3" fill="#4237C1" />
											<rect x="38" y="81" width="16" height="5" fill="#484848" />
											<rect x="44" y="86" width="5" height="3" fill="#ff4545" />
											<rect x="45" y="157" width="3" height="3" fill="#ff4545" />
											<rect x="38" y="89" width="17" height="8" fill="#4237C1" />
											<path d="M41 97H52V143H41V97Z" fill="#ff4545" />
											<rect x="39" y="160" width="15" height="10" fill="#ff4545" />
											<rect x="158" y="78" width="42" height="3" fill="#4237C1" />
											<rect x="171" y="81" width="16" height="5" fill="#484848" />
											<rect x="177" y="86" width="5" height="3" fill="#ff4545" />
											<rect x="178" y="157" width="3" height="3" fill="#ff4545" />
											<rect x="171" y="89" width="17" height="8" fill="#4237C1" />
											<path d="M174 97H185V143H174V97Z" fill="#ff4545" />
											<rect x="172" y="160" width="15" height="10" fill="#ff4545" />
											<rect x="300" y="77" width="42" height="3" fill="#4237C1" />
											<rect x="313" y="80" width="16" height="5" fill="#484848" />
											<rect x="319" y="85" width="5" height="3" fill="#C4C4C4" />
											<rect x="320" y="145" width="3" height="6" fill="#C4C4C4" />
											<rect x="313" y="88" width="17" height="8" fill="#4237C1" />
											<path d="M316 96H327V145H316V96Z" fill="#C4C4C4" />
										</g>
										<defs>
											<clipPath id="clip0_55_342">
												<rect width="438" height="360" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
							<div className="row flex-center">
								<div className="col-8">
									<span className="packingParamsTitle">Tiến độ thực hiện: {params.numbs}</span>
									<ProgressBar height="20px" percent={50} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-5">
					<div className="card full-height">
						<div className="card__header mb-20">
							<h3>Thông số cài đặt</h3>
						</div>
						<div className="card__body mb-15">
							<ThemeProvider
								theme={createTheme({
									palette: { mode: 'light' },
								})}
							>
								<TableContainer component={StyledPaper}>
									<Table sx={{ minWidth: 600 }} aria-label="customized table">
										<TableHead>
											<TableRow>
												<StyledTableCell align="left">Thông số của máy</StyledTableCell>
												<StyledTableCell align="left">Xi lanh 1</StyledTableCell>
												<StyledTableCell align="left">Xi lanh 2</StyledTableCell>
											</TableRow>
										</TableHead>
										<TableBody
											sx={{
												'& .MuiTableRow-root:hover': {
													'& .MuiTableCell-root': {
														color: 'white',
													},
												},
											}}
										>
											{rows.map((row) => (
												<TableRow key={row.params}>
													<StyledTableCell align="left">{row.params}</StyledTableCell>
													<StyledTableCell align="left">{row.process2}</StyledTableCell>
													<StyledTableCell align="left">{row.process3}</StyledTableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</ThemeProvider>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card full-height">
						<div className="card__header mb-15">
							<h3>Trạng thái máy</h3>
						</div>
						<div className="card__body flex-center">
							{machineState === 'stop' ? (
								<Stop width="100%" height="250" />
							) : machineState === 'manual' ? (
								<Manual width="100%" height="250" />
							) : (
								<Auto width="100%" height="250" />
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6 col-md-12">
					<div className="card">
						<div className="card__header">
							<h3>Thông số giám sát</h3>
							<p>Xi lanh 1</p>
						</div>
						<div className="card__body flex-horizontal-space-evenly">
							<div
								className="flex-space-evenly"
								style={{
									flexGrow: 1,
									flexBasis: '300px',
								}}
							>
								{/* <IgrRadialGauge
									width="100%"
									height="300px"
									minimumValue={0}
									maximumValue={100}
									scaleBrush="#c6c6c6"
									scaleStartExtent={0.3}
									scaleEndExtent={0.575}
									value={70}
									interval={10}
									tickStartExtent={0.45}
									tickEndExtent={0.575}
									tickStrokeThickness={2}
									tickBrush="Black"
									minorTickCount={4}
									minorTickEndExtent={0.5}
									minorTickStartExtent={0.575}
									fontBrush="Black"
									backingShape="Fitted"
									backingBrush="#ededed"
								>
									<IgrRadialGaugeRange name="range1" startValue={0} endValue={40} brush="red" />
									<IgrRadialGaugeRange name="range2" startValue={40} endValue={60} brush="yellow" />
									<IgrRadialGaugeRange name="range3" startValue={60} endValue={100} brush="green" />
								</IgrRadialGauge> */}
								<h4>Lực nhấn</h4>
							</div>
							<div
								className="flex-space-evenly"
								style={{
									flexGrow: 1,
									flexBasis: '300px',
								}}
							>
								{/* <IgrRadialGauge
									width="100%"
									height="300px"
									minimumValue={0}
									maximumValue={100}
									scaleBrush="#c6c6c6"
									scaleStartExtent={0.3}
									scaleEndExtent={0.575}
									value={70}
									interval={10}
									tickStartExtent={0.45}
									tickEndExtent={0.575}
									tickStrokeThickness={2}
									tickBrush="Black"
									minorTickCount={4}
									minorTickEndExtent={0.5}
									minorTickStartExtent={0.575}
									fontBrush="Black"
									backingShape="Fitted"
									backingBrush="#ededed"
								>
									<IgrRadialGaugeRange name="range1" startValue={0} endValue={40} brush="red" />
									<IgrRadialGaugeRange name="range2" startValue={40} endValue={60} brush="yellow" />
									<IgrRadialGaugeRange name="range3" startValue={60} endValue={100} brush="green" />
								</IgrRadialGauge> */}
								<h4>Thời gian giữ</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-12">
					<div className="card">
						<div className="card__header">
							<h3>Thông số giám sát</h3>
							<p>Xi lanh 2</p>
						</div>
						<div className="card__body flex-horizontal-space-evenly">
							<div
								className="flex-space-evenly"
								style={{
									flexGrow: 1,
									flexBasis: '300px',
								}}
							>
								{/* <IgrRadialGauge
									width="100%"
									height="300px"
									minimumValue={0}
									maximumValue={100}
									scaleBrush="#c6c6c6"
									scaleStartExtent={0.3}
									scaleEndExtent={0.575}
									value={70}
									interval={10}
									tickStartExtent={0.45}
									tickEndExtent={0.575}
									tickStrokeThickness={2}
									tickBrush="Black"
									minorTickCount={4}
									minorTickEndExtent={0.5}
									minorTickStartExtent={0.575}
									fontBrush="Black"
									backingShape="Fitted"
									backingBrush="#ededed"
								>
									<IgrRadialGaugeRange name="range1" startValue={0} endValue={40} brush="red" />
									<IgrRadialGaugeRange name="range2" startValue={40} endValue={60} brush="yellow" />
									<IgrRadialGaugeRange name="range3" startValue={60} endValue={100} brush="green" />
								</IgrRadialGauge> */}
								<h4>Lực nhấn</h4>
							</div>
							<div
								className="flex-space-evenly"
								style={{
									flexGrow: 1,
									flexBasis: '300px',
								}}
							>
								{/* <IgrRadialGauge
									width="100%"
									height="300px"
									minimumValue={0}
									maximumValue={100}
									scaleBrush="#c6c6c6"
									scaleStartExtent={0.3}
									scaleEndExtent={0.575}
									value={70}
									interval={10}
									tickStartExtent={0.45}
									tickEndExtent={0.575}
									tickStrokeThickness={2}
									tickBrush="Black"
									minorTickCount={4}
									minorTickEndExtent={0.5}
									minorTickStartExtent={0.575}
									fontBrush="Black"
									backingShape="Fitted"
									backingBrush="#ededed"
								>
									<IgrRadialGaugeRange name="range1" startValue={0} endValue={40} brush="red" />
									<IgrRadialGaugeRange name="range2" startValue={40} endValue={60} brush="yellow" />
									<IgrRadialGaugeRange name="range3" startValue={60} endValue={100} brush="green" />
								</IgrRadialGauge> */}
								<h4>Thời gian giữ</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 flex-center">
					<Button variant="contained">Đi đến báo cáo</Button>
				</div>
			</div>
		</>
	);
}

export default FirstSystem;
