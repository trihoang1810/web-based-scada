import axiosClient from './axiosClient';
import axios from 'axios';
import { format } from 'date-fns';

const injectionApi = {
	getInjectionReport(dateStart, dateEnd) {
		return axiosClient.get('/injection', {
			params: {
				dateStart,
				dateEnd,
			},
		});
	},
	getTemporaryInjectionReport(machineId, dateStart, dateEnd) {
		return axios.get(`http://192.168.1.80:8082/api/shiftreports/machine/a1`, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000/',
				'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
			},
			params: {
				startTime: dateStart,
				stopTime: format(new Date(dateEnd + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
	getTemporaryOeeStatistics(dateStart, dateEnd) {
		//yyyy-MM-dd
		return axios.get(`http://192.168.1.80:8082/api/oeestatistics`, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000/',
				'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
			},
			params: {
				startTime: dateStart,
				stopTime: dateEnd
					? format(new Date(dateEnd + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')
					: format(new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
	getTemporaryInjectionPlanTracking(startTime, stopTime) {
		return axios.get('http://192.168.1.80:8082/api/shiftreports', {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000/',
				'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
				'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
			},
			params: {
				startTime,
				stopTime: stopTime
					? format(new Date(stopTime + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')
					: format(new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
			},
		});
	},
};

export { injectionApi };
