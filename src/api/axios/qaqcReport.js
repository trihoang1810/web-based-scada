import { format } from 'date-fns';
import axiosClient from './axiosClient';

const qaQcApi = {
	getEnduranceReport(startTime, stopTime) {
		return axiosClient.get('/qaqc/reliability', {
			params: {
				startTime,
				stopTime: format(new Date(stopTime + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
	getForcedEnduranceReport(startTime, stopTime) {
		return axiosClient.get('/qaqc/deformation', {
			params: {
				startTime,
				stopTime: format(new Date(stopTime + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
	getRockTestReport(startTime, stopTime) {
		return axiosClient.get('/qaqc/rocktest', {
			params: {
				startTime,
				stopTime: format(new Date(stopTime + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
	getStaticLoadReport(startTime, stopTime) {
		return axiosClient.get('/qaqc/staticload', {
			params: {
				startTime,
				stopTime: format(new Date(stopTime + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
	getCurlingForceReport(startTime, stopTime) {
		return axiosClient.get('/qaqc/curlingforce', {
			params: {
				startTime,
				stopTime: format(new Date(stopTime + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
	getWaterProofReport(startTime, stopTime) {
		return axiosClient.get('/qaqc/waterproof', {
			params: {
				startTime,
				stopTime: format(new Date(stopTime + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
};

export { qaQcApi };
