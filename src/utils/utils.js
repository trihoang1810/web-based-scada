import { format } from 'date-fns';

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

const packagingEmployees = ['Nguyễn Hữu Tâm', 'Trần Hải Văn', 'Danh Khả', 'Nguyễn Thanh Định'];

const packagingState = {
	onProcess: 'primary',
	onFinish: 'success',
	onIdle: 'warning',
	onCancel: 'danger',
	onWait: 'wait',
};

const COLUMNS = [
	{
		Header: 'Thời gian',
		Footer: 'Thời gian',
		width: 80,
		accessor: 'date',
		Cell: ({ value }) => {
			return format(new Date(value), 'dd-MM-yyyy HH:mm:ss');
		},
		disableSortBy: true,
	},
	{
		Header: 'Mã lỗi',
		Footer: 'Mã lỗi',
		width: 40,
		accessor: 'error_code',
		disableSortBy: true,
	},
	{
		Header: 'Khu vực',
		Footer: 'Khu vực',
		width: 100,
		accessor: 'error_sector',
		disableSortBy: true,
	},
	{
		Header: 'Chi tiết',
		Footer: 'Chi tiết',
		width: 200,
		accessor: 'error_msg',
		disableSortBy: true,
	},
	{
		Header: 'Mức độ ưu tiên',
		Footer: 'Mức độ ưu tiên',
		width: 30,
		accessor: 'priority',
		Cell: ({ value }) => {
			switch (value) {
				case 'low':
					return 'Thấp';
				case 'middle':
					return 'Trung bình';
				case 'high':
					return 'Cao';
				default:
					break;
			}
		},
		disableFilters: true,
	},
];

function convertDate(value) {
	const date = new Date(value);
	return date.toLocaleDateString();
}

export { packagingState, packagingEmployees, convertHMS, COLUMNS, convertDate };
