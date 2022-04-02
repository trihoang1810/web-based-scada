import { format } from 'date-fns';
import React from 'react';
import { CSVLink } from 'react-csv';
import './csvDownloadButton.css';

function CsvDownloadButton({ headers, dataToDownload }) {
	return (
		<>
			<CSVLink
				className="csv-download-button"
				filename={`Cảnh báo ${format(Date.now(), 'dd-MM-yyyy HH:mm:ss')}.csv`}
				target="_blank"
				headers={headers}
				data={dataToDownload}
			>
				Tải xuống cảnh báo
			</CSVLink>
		</>
	);
}

export default CsvDownloadButton;
