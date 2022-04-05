import React from 'react';
import './reportQaqcTable.css';
import { usePagination, useFlexLayout, useTable } from 'react-table';

function ReportQaqcTable({ reportHeaders, reportData }) {
	const columns = React.useMemo(() => reportHeaders, [reportHeaders]);
	const data = React.useMemo(() => reportData, [reportData]);

	const defaultColumn = React.useMemo(() => {
		return {
			minWidth: 30, // minWidth is only used as a limit for resizing
			width: 150, // width is used for both the flex-basis and flex-grow
			maxWidth: 200, // maxWidth is only used as a limit for resizing
		};
	}, []);
	const tableInstance = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		usePagination,
		useFlexLayout
	);
	const {
		getTableProps,
		getTableBodyProps,
		page,
		canNextPage,
		canPreviousPage,
		nextPage,
		previousPage,
		pageOptions,
		state,
		headerGroups,
		gotoPage,
		pageCount,
		prepareRow,
	} = tableInstance;

	const { pageIndex } = state;

	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__header">
							<h4>Kết quả tìm kiếm</h4>
						</div>
						<div className="card__body">
							<div className="center-block fix-width scroll-inner">
								<table id="report-qaqc__table" {...getTableProps()}>
									<thead>
										{headerGroups.map((headerGroup) => (
											<tr {...headerGroup.getHeaderGroupProps()}>
												{headerGroup.headers.map((column) => {
													return <th {...column.getHeaderProps()}>{column.render('Header')}</th>;
												})}
											</tr>
										))}
									</thead>
									<tbody {...getTableBodyProps()}>
										{page.map((row) => {
											prepareRow(row);
											return (
												<tr {...row.getRowProps()}>
													{row.cells.map((cell) => {
														return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
													})}
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>

							<div className="pagination__container">
								<span>
									Trang <strong>{pageIndex + 1} </strong>
									<span> của </span>
									<strong>{pageOptions.length} </strong>
								</span>{' '}
								<button
									className={` pagination__button pagination__move-to-top ${canPreviousPage ? `` : `disabled`}`}
									onClick={() => gotoPage(0)}
								>
									{'<<'}
								</button>{' '}
								<button
									className={`pagination__button ${canPreviousPage ? `` : `disabled`}`}
									onClick={() => previousPage()}
								>
									Trang trước
								</button>
								<button className={`pagination__button ${canNextPage ? `` : `disabled`}`} onClick={() => nextPage()}>
									Trang sau
								</button>
								<button
									className={`pagination__button pagination__move-to-bottom ${canNextPage ? `` : `disabled`}`}
									onClick={() => gotoPage(pageCount - 1)}
								>
									{'>>'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ReportQaqcTable;
