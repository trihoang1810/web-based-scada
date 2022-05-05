import { createSlice } from '@reduxjs/toolkit';

const planTrackingData = createSlice({
	name: 'planTrackingData',
	initialState: {
		dailyInjectionPlanTrackingData: [],
		dailyPackingPlanTrackingData: [],
	},
	reducers: {
		setDailyInjectionPlanTrackingData: (state, action) => {
			// state.dailyInjectionPlanTrackingData.push(action.payload);
			state.dailyInjectionPlanTrackingData = action.payload;
		},
		setDailyPackingPlanTrackingData: (state, action) => {
			state.dailyPackingPlanTrackingData.push(action.payload);
			// state.dailyPackingPlanTrackingData = action.payload;
		},
		resetDailyPackingPlanTrackingData: (state) => {
			state.dailyPackingPlanTrackingData = [];
		},
		resetDailyInjectionPlanTrackingData: (state) => {
			state.dailyInjectionPlanTrackingData = [];
		},
	},
});

const { reducer, actions } = planTrackingData;
export default reducer;
export const {
	setDailyPackingPlanTrackingData,
	resetDailyPackingPlanTrackingData,
	setDailyInjectionPlanTrackingData,
	resetDailyInjectionPlanTrackingData,
} = actions;
