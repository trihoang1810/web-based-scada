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

const packingEmployees = ['Nguyễn Hữu Tâm', 'Trần Hải Văn', 'Danh Khả', 'Nguyễn Thanh Định'];

const packingState = {
	onProcess: 'primary',
	onFinish: 'success',
	onIdle: 'warning',
	onCancel: 'danger',
	onWait: 'wait',
};

const REPORT_MENU_LIST = [
	{
		title: 'Phòng QA/QC thiết bị',
		url: '/report/main/qaqc',
	},
	{
		title: 'Khu vực đóng gói',
		url: '/report/main/packing',
	},
	{
		title: 'Khu vực máy ép',
		url: '/report/main/injection',
	},
];

const QA_QC_REPORT_MENU_LIST = [
	{
		title: 'MKT Độ bền NBC',
		url: '/report/main/qaqc/endurance',
	},
	{
		title: 'MKT Độ bền cưỡng bức NBC',
		url: '/report/main/qaqc/forced-endurance',
	},
	{
		title: 'MKT Độ biến dạng NBC',
		url: '/report/main/qaqc/deformation',
	},
	{
		title: 'MKT Chống thấm NBC',
		url: '/report/main/qaqc/water-proof',
	},
];

const ENDURANCE_COLUMNS = [
	{
		Header: 'Số lần thử',
		accessor: 'sample',
	},
	{
		Header: 'Thời gian nắp đóng êm',
		accessor: 'time',
	},
	{
		Header: 'Chân nắp không rơi ra',
		accessor: 'toilet_bumper',
	},
	{
		Header: 'Không rò rỉ dầu',
		accessor: 'no_oil_spill',
	},
	{
		Header: 'Kết quả đánh giá',
		accessor: 'first_result',
	},
	{
		Header: 'Thời gian đế đóng êm',
		accessor: 'closing_time',
	},
	{
		Header: 'Chân đế không rơi',
		accessor: 'no_drop_bumper',
	},
	{
		Header: 'Không rò rỉ',
		accessor: 'no_spill',
	},
	{
		Header: 'Kết quả đánh giá',
		accessor: 'second_result',
	},
	{
		Header: 'Tổng lỗi',
		accessor: 'total',
	},
	{
		Header: 'Ghi chú',
		accessor: 'note',
	},
	{
		Header: 'Nhân viên KT',
		accessor: 'employee',
	},
];

const STATIC_LOAD_DEFORMATION_COLUMNS = [
	{
		Header: 'Mẫu số',
		accessor: 'id',
	},
	{
		Header: 'Kết quả kiểm tra chịu tải tĩnh trong 3 phút',
		accessor: 'result',
	},
	{
		Header: 'Tổng lỗi',
		accessor: 'total',
	},
	{
		Header: 'Ghi chú',
		accessor: 'note',
	},
	{
		Header: 'Nhân viên KT',
		accessor: 'employee',
	},
];

const BENDING_DEFORMATION_COLUMNS = [
	{
		Header: 'Mẫu số',
		accessor: 'id',
	},
	{
		Header: 'Tải trọng',
		accessor: 'weight',
	},
	{
		Header: 'Số lần thử nghiệm',
		accessor: 'number_of_test',
	},
	{
		Header: 'Kết quả đánh giá',
		accessor: 'result',
	},
	{
		Header: 'Tổng lỗi',
		accessor: 'total',
	},
	{
		Header: 'Ghi chú',
		accessor: 'note',
	},
	{
		Header: 'Nhân viên KT',
		accessor: 'employee',
	},
];

const ROCK_TEST_DEFORMATION_COLUMNS = [
	{
		Header: 'Mẫu số',
		accessor: 'id',
	},
	{
		Header: 'Tải trọng',
		accessor: 'weight',
	},
	{
		Header: 'Số lần thử nghiệm',
		accessor: 'number_of_test',
	},
	{
		Header: 'Kết quả đánh giá',
		accessor: 'result',
	},
	{
		Header: 'Tổng lỗi',
		accessor: 'total',
	},
	{
		Header: 'Ghi chú',
		accessor: 'note',
	},
	{
		Header: 'Nhân viên KT',
		accessor: 'employee',
	},
];

const FORCED_ENDURANCE_COLUMNS = [
	{
		Header: 'Số lần thử',
		accessor: 'sample',
	},
	{
		Header: 'Thời gian nắp đóng êm',
		accessor: 'time',
	},
	{
		Header: 'Chân nắp không nứt vỡ',
		accessor: 'toilet_bumper',
	},
	{
		Header: 'Không rò rỉ dầu',
		accessor: 'no_oil_spill',
	},
	{
		Header: 'Kết quả đánh giá',
		accessor: 'first_result',
	},
	{
		Header: 'Thời gian đế đóng êm',
		accessor: 'closing_time',
	},
	{
		Header: 'Chân đế không nứt vỡ',
		accessor: 'no_drop_bumper',
	},
	{
		Header: 'Không rò rỉ',
		accessor: 'no_spill',
	},
	{
		Header: 'Kết quả đánh giá',
		accessor: 'second_result',
	},
	{
		Header: 'Tổng lỗi',
		accessor: 'total',
	},
	{
		Header: 'Ghi chú',
		accessor: 'note',
	},
	{
		Header: 'Nhân viên KT',
		accessor: 'employee',
	},
];

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

const WATER_PROOF_COLUMNS = [
	{
		Header: 'Mẫu số',
		accessor: 'id',
	},
	{
		Header: 'Nhiệt độ máy',
		accessor: 'temperature',
	},
	{
		Header: 'Thời gian',
		accessor: 'time',
	},
	{
		Header: 'Kết quả đánh giá',
		accessor: 'result',
	},
	{
		Header: 'Tổng lỗi',
		accessor: 'total',
	},
	{
		Header: 'Ghi chú',
		accessor: 'note',
	},
	{
		Header: 'Nhân viên KT',
		accessor: 'employee',
	},
];

function convertDate(value) {
	const date = new Date(value);
	return date.toLocaleDateString();
}

export {
	packingState,
	packingEmployees,
	QA_QC_REPORT_MENU_LIST,
	convertHMS,
	COLUMNS,
	convertDate,
	REPORT_MENU_LIST,
	ENDURANCE_COLUMNS,
	FORCED_ENDURANCE_COLUMNS,
	STATIC_LOAD_DEFORMATION_COLUMNS,
	ROCK_TEST_DEFORMATION_COLUMNS,
	BENDING_DEFORMATION_COLUMNS,
	WATER_PROOF_COLUMNS,
};
