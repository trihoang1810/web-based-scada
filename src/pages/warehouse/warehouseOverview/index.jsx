import WarehouseOverview from '../../../components/warehouseOverview/WarehouseOverview';

function WarehouseOverviewPage() {
	return (
		<>
			<h2 className="page-header">KHO VẬN</h2>
			<div className="card">
				<div className="card__body">
					<WarehouseOverview />
				</div>
			</div>
		</>
	);
}

export default WarehouseOverviewPage;
