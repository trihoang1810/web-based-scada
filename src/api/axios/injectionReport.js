import axios from 'axios';

const getInjectionReport = async () => {
	return axios.get('https://my.api.mockaroo.com/injection_molding_machine_report.json?key=4ead7de0');
};

export { getInjectionReport };
