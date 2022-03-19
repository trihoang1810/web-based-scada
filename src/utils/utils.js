import { ReactComponent as StoppedForcedEndurance } from '../assets/images/qaqc/forcedEndurance__stop.svg';
import { ReactComponent as RunForcedEndurance } from '../assets/images/qaqc/forcedEndurance__run.svg';

import { ReactComponent as StoppedEndurance } from '../assets/images/qaqc/endurance__stop.svg';
import { ReactComponent as RunEndurance } from '../assets/images/qaqc/endurance__run.svg';

const machineInformation = {
	forcedEndurance__stop: StoppedForcedEndurance,
	forcedEndurance__run: RunForcedEndurance,
	endurance__stop: StoppedEndurance,
	endurance__run: RunEndurance,
};

function convertHMS(value) {
	const sec = parseInt(value, 10); // convert value to number if it's string
	let hours = Math.floor(sec / 3600); // get hours
	let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
	let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
	// add 0 if value < 10; Example: 2 => 02
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	return hours + ' tiếng ' + minutes + ' phút'; // Return is HH : MM : SS
}

const packingEmployees = ['Nguyễn Hữu Tâm', 'Trần Hải Văn', 'Danh Khả', 'Nguyễn Thanh Định'];

export { packingEmployees, machineInformation, convertHMS };
