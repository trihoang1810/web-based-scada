import { createSlice } from '@reduxjs/toolkit';

const monitorData = createSlice({
	name: 'deformationMonitorData',
	initialState: {
		deformationMonitorData: {
			numb1: 'running...',
			numb2: 'running...',
			force1: 'running...',
			force2: 'running...',
			time1: 'running...',
			time2: 'running...',
			isRunning: false,
			isAlarm: false,
			mode: null,
			pvForceCylinder1: 0,
			pvForceCylinder2: 0,
			pvForceCylinder3: 0,
			pvTimeHold1: 0,
			pvTimeHold2: 0,
			pvTimeHold3: 0,
			pvNoPress1: 'running...',
			pvNoPress2: 'running...',
		},
	},
	reducers: {
		setDeformationMonitorData: (state, action) => {
			state.deformationMonitorData = {
				...state.deformationMonitorData,
				...action.payload,
			};
		},
	},
});

const { reducer, actions } = monitorData;
export const { setDeformationMonitorData } = actions;
export default reducer;
