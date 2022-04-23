import axiosClient from './axiosClient';

const qaQcApi = {
	getEnduranceReport(dateStart, dateEnd) {
		return axiosClient.get('/qaqc/reliability', {
			params: {
				dateStart,
				dateEnd,
			},
		});
	},
	getForcedEnduranceReport(dateStart, dateEnd) {
		return axiosClient.get('/qaqc/deformation', {
			params: {
				dateStart,
				dateEnd,
			},
		});
	},
};

export { qaQcApi };
