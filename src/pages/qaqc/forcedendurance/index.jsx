import React from 'react';
// import { IgrRadialGauge, IgrRadialGaugeRange } from 'igniteui-react-gauges';
import Chart from 'react-apexcharts';
import { ReactComponent as Stop } from '../../../assets/images/qaqc/stop.svg';
import { ReactComponent as Manual } from '../../../assets/images/qaqc/manual.svg';
import { ReactComponent as Auto } from '../../../assets/images/qaqc/auto.svg';
import { ReactComponent as ForcedEnduranceMachine } from '../../../assets/images/qaqc/forcedEndurance__run.svg';
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
	Link,
	Typography,
	Breadcrumbs,
} from '@mui/material';
import ProgressBar from '../../../components/progressBar/ProgressBar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundImage: 'linear-gradient(var(--main-color), var(--second-color));',
		color: 'var(--txt-white)',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

function createData(params, process) {
	return {
		params,
		process,
	};
}

function StyledPaper({ children }) {
	return <Paper elevation={6}>{children}</Paper>;
}
function ForcedEndurance() {
	const [machineState, setMachineState] = React.useState('stop');
	const [settings, setSettings] = React.useState({
		stopTimeAbove: 0,
		stopTimeBelow: 0,
		numbs: 0,
		testNumber: 0,
	});
	const [params, setParams] = React.useState({
		forcedTime: 0,
		stopTimeAbove: 0,
		stopTimeBelow: 0,
		numbs: 0,
		testNumber: 0,
	});
	const rows = [
		createData('Thời gian dừng lên', settings.stopTimeAbove),
		createData('Thời gian dừng xuống', settings.stopTimeBelow),
		createData('Số lần thực hiện', settings.numbs),
		createData('Bài test', settings.testNumber),
	];
	return (
		<>
			<Breadcrumbs
				sx={{
					'& .MuiBreadcrumbs-ol': {
						'& .MuiBreadcrumbs-li': {
							'& .MuiTypography-root': {
								display: 'block',
								fontSize: '1.5em',
								marginBlockStart: '0.83em',
								marginBlockEnd: '0.83em',
								marginInlineStart: '0px',
								marginInlineEnd: '0px',
								fontWeight: 'bold',
							},
							'& .MuiLink-root': {
								marginBottom: '15px',
								textTransform: 'capitalize',
							},
							'& .MuiBreadcrumbs-separator': {
								fontSize: '1.5rem',
							},
						},
					},
				}}
				aria-label="breadcrumb"
			>
				<Link color="inherit" underline="hover" href="/qaqc">
					PHÒNG QA/QC THIẾT BỊ
				</Link>
				<Typography color="text.primary">MÁY KIẾM TRA ĐỘ BỀN CƯỠNG BỨC</Typography>
			</Breadcrumbs>
			<div className="row">
				<div className="col-3">
					<div className="card">
						<div className="card__body">
							<div className="row">
								<div className="col-12">
									<ForcedEnduranceMachine width="100%" height="350" />
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
				<div className="col-6">
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
												<StyledTableCell align="left">Xi lanh 3</StyledTableCell>
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
													<StyledTableCell align="left">{row.process}</StyledTableCell>
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
				<div className="col-12">
					<div className="card">
						<div className="card__header">
							<h3>Thông số giám sát</h3>
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
								<h4>Thời gian dừng lên</h4>
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
								<h4>Thời gian lên CB</h4>
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
								<h4>Thời gian dừng xuống</h4>
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

export default ForcedEndurance;
