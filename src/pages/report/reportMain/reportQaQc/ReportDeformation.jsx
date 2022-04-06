import React from 'react';
import ReportQaqcFilter from '../../../../components/reportQaqcFilter/ReportQaqcFilter';
import { createExcelFile, drawBorder, saveExcelFile } from '../../../../utils/excel';
import convention from '../../../../assets/JsonData/report_qaqc_endurance.json';
import enduranceData from '../../../../assets/JsonData/mock_endurance_report.json';
import { format } from 'date-fns';
import ReportQaqcTable from '../../../../components/reportQaqcTable/ReportQaqcTable';
import { ENDURANCE_COLUMNS } from '../../../../utils/utils';

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
		sheet1.getRow(10).height = 40;
		sheet1.getRow(43).height = 95;
		//add text value
		[...Array(20).keys()].forEach((item, index) => {
			const row = sheet1.getRow(index + 16);
			row.values = [(index + 1) * 5000];
			row.font = { name: 'Times New Roman', size: 11 };
		});
		enduranceData.forEach((item, index) => {
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
		for (let i = 15; i <= 35; i++) {
			sheet1.mergeCells(`K${i}:M${i}`);
		}
		sheet1.getColumn(14).width = 40;
		//set border
		for (let r = 15; r <= 35; r++) {
			for (let c = 1; c <= 14; c++) {
				drawBorder(sheet1, r, c, 'left', 'right');
				if (r === 35) {
					drawBorder(sheet1, r, c, 'left', 'right', 'bottom');
				}
			}
		}

		for (let c = 14; c <= 28; c++) {
			drawBorder(sheet1, 37, c, 'top');
		}

		for (let r = 37; r <= 40; r++) {
			drawBorder(sheet1, r, 14, 'right');
		}

		drawBorder(sheet1, 37, 14, 'top', 'right');

		//save file to pc
		saveExcelFile(workbook, `Phieu-kiem-tra-dong-em ${productName} ${format(new Date(), 'dd-MM-yyyy')}`);
	};
	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<>
			<ReportQaqcFilter deformation={true} onSubmit={onSubmit} exportReport={exportReport} />
			<ReportQaqcTable reportData={enduranceData} reportHeaders={ENDURANCE_COLUMNS} />
		</>
	);
}

export default ReportDeformation;
