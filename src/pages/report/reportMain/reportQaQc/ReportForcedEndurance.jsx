import React from 'react';
import ReportQaqcFilter from '../../../../components/reportQaqcFilter/ReportQaqcFilter';
import { createExcelFile, drawBorder, drawDottedBorder, saveExcelFile } from '../../../../utils/excel';
import convention from '../../../../assets/JsonData/report_qaqc_forced-endurance.json';
import forcedEnduranceData from '../../../../assets/JsonData/mock_forced-endurance_report.json';
import { format } from 'date-fns';
import ReportQaqcTable from '../../../../components/reportQaqcTable/ReportQaqcTable';
import { FORCED_ENDURANCE_COLUMNS } from '../../../../utils/utils';

function ReportDeformation() {
	const exportReport = (productName) => {
		const workbook = createExcelFile(convention, 11);
		const sheet1 = workbook.getWorksheet('sheet1');

		sheet1.addImage(0, {
			tl: { row: 0.3, col: 0.2 },
			br: { row: 3.7, col: 1.7 },
		});

		//set width, height of row/column
		sheet1.getRow(5).height = 10;
		sheet1.getRow(7).height = 10;
		sheet1.getRow(11).height = 10;
		sheet1.getRow(9).height = 40;
		sheet1.getRow(8).height = 20;
		sheet1.getRow(6).height = 20;
		sheet1.getRow(10).height = 40;
		sheet1.getRow(30).height = 95;
		//add text value
		[...Array(6).keys()].forEach((item, index) => {
			const row = sheet1.getRow(index + 16);
			row.values = [(index + 1) * 5000];
			row.font = { name: 'Times New Roman', size: 11 };
			row.height = 20;
		});
		forcedEnduranceData.forEach((item, index) => {
			const row = sheet1.getRow(index + 16);
			row.values = [
				item.sample,
				item.time,
				item.toilet_bumper,
				item.no_oil_spill,
				item.first_result,
				item.closing_time,
				item.no_drop_bumper,
				item.no_spill,
				item.second_result,
				item.total,
				item.note,
				'',
				'',
				item.employee,
			];
			row.font = { name: 'Times New Roman', size: 11 };
		});
		//merge cells
		for (let i = 15; i <= 21; i++) {
			sheet1.mergeCells(`K${i}:M${i}`);
		}
		sheet1.getColumn(14).width = 40;
		//set border
		for (let r = 15; r <= 21; r++) {
			for (let c = 1; c <= 14; c++) {
				drawBorder(sheet1, r, c, 'left', 'right', 'top', 'bottom');
			}
		}

		for (let c = 1; c <= 14; c++) {
			drawBorder(sheet1, 24, c, 'top');
		}
		for (let c = 3; c <= 14; c++) {
			drawDottedBorder(sheet1, 25, c, 'top', 'bottom');
		}

		for (let c = 3; c <= 14; c++) {
			drawDottedBorder(sheet1, 26, c, 'bottom');
		}
		for (let r = 24; r <= 27; r++) {
			drawBorder(sheet1, r, 14, 'right');
		}

		drawBorder(sheet1, 24, 14, 'top', 'right');

		//save file to pc
		saveExcelFile(workbook, `Phieu-kiem-tra-dong-em ${productName} ${format(new Date(), 'dd-MM-yyyy')}`);
	};
	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<>
			<ReportQaqcFilter onSubmit={onSubmit} exportReport={exportReport} />
			<ReportQaqcTable reportData={forcedEnduranceData} reportHeaders={FORCED_ENDURANCE_COLUMNS} />
		</>
	);
}

export default ReportDeformation;
