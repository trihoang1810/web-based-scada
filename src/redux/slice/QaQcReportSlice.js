import { createSlice } from '@reduxjs/toolkit';

const reportData = createSlice({
	name: 'enduranceReportData',
	initialState: {
		enduranceReportData: [],
		enduranceReportDataDate: {},
		forcedEnduranceReportData: [],
		forcedEnduranceReportDataDate: {},
	},
	reducers: {
		setEnduranceReportData: (state, action) => {
			state.enduranceReportData.push(action.payload);
		},
		setEnduranceReportDataDate: (state, action) => {
			state.enduranceReportDataDate = action.payload;
		},
		setForcedEnduranceReportData: (state, action) => {
			state.forcedEnduranceReportData.push(action.payload);
		},
		setForcedEnduranceReportDataDate: (state, action) => {
			state.forcedEnduranceReportDataDate = action.payload;
		},
	},
});

const { reducer, actions } = reportData;
export const {
	setEnduranceReportData,
	setForcedEnduranceReportData,
	setEnduranceReportDataDate,
	setForcedEnduranceReportDataDate,
} = actions;
export default reducer;
