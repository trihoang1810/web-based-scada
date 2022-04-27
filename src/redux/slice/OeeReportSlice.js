import { createSlice } from '@reduxjs/toolkit';

const oeeReportData = createSlice({
	name: 'oeeReportData',
	initialState: {
		oeeOverall: [0, 0, 0],
		oeeTarget: 50,
		pauseTimeProportion: 0,
		lastTimeUpdated: 0,
		discrepancy: 0,
		trend: null,
		detailLabels: [],
		availabilityDetailSeries: [],
		scrapDetailSeries: [],
		totalQuantityDetailSeries: [],
		downTimeData: {
			// {
			detail: 'Thời gian nghỉ',
			percent: 0,
			trend: 'up',
			// },
			// {
			// 	detail: 'Máy tắt do lỗi',
			// 	percent: 65,
			// 	trend: 'down',
			// },
			// {
			// 	detail: 'Không sử dụng',
			// 	percent: 40,
			// 	trend: 'up',
			// },
			// {
			// 	detail: 'Không sử dụng',
			// 	percent: 0,
			// 	trend: 'up',
			// },
		},
	},
	reducers: {
		setOeeOverall: (state, action) => {
			state.oeeOverall = action.payload;
		},
		setOeeTarget: (state, action) => {
			state.oeeTarget = action.payload;
		},
		setPauseTimeProportion: (state, action) => {
			state.pauseTimeProportion = action.payload;
		},
		setLastTimeUpdated: (state, action) => {
			state.lastTimeUpdated = action.payload;
		},
		setDiscrepancy: (state, action) => {
			state.discrepancy = action.payload;
		},
		setTrend: (state, action) => {
			state.trend = action.payload;
		},
		setDownTimeData: (state, action) => {
			state.downTimeData = {
				...state.downTimeData,
				percent: action.payload,
			};
		},
		setDetailLabels: (state, action) => {
			state.detailLabels = action.payload;
		},
		pushAvailabilityDetailSeries: (state, action) => {
			state.availabilityDetailSeries.push(action.payload);
		},
		resetDetailSeries: (state) => {
			state.availabilityDetailSeries = [];
			state.scrapDetailSeries = [];
			state.totalQuantityDetailSeries = [];
		},
		pushScrapDetailSeries: (state, action) => {
			state.scrapDetailSeries.push(action.payload);
		},
		pushTotalQuantityDetailSeries: (state, action) => {
			state.totalQuantityDetailSeries.push(action.payload);
		},
	},
});

const { reducer, actions } = oeeReportData;
export const {
	setOeeOverall,
	pushScrapDetailSeries,
	pushAvailabilityDetailLabels,
	pushAvailabilityDetailSeries,
	resetDetailSeries,
	setOeeTarget,
	pushTotalQuantityDetailSeries,
	setPauseTimeProportion,
	setLastTimeUpdated,
	setDetailLabels,
	setDiscrepancy,
	setTrend,
	setDownTimeData,
} = actions;
export default reducer;
