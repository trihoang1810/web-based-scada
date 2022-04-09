import { useHistory } from 'react-router-dom';
import WarehouseFilterForm from '../warehouseFilterForm/WarehouseFilterForm';
import WarehouseTable from '../warehouseTable/WarehouseTable';
import './warehouseOverview.css';

function WarehouseOverview() {
	const history = useHistory();

	const showDetail = (id) => {
		history.push('/warehouse/' + id);
	};

	return (
		<>
			<WarehouseFilterForm />

			<div className="warehouseOverview__result">
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card__body">
								<WarehouseTable
									headers={[
										{ text: 'Loại sản phẩm', key: 'type' },
										{ text: 'Mã sản phẩm', key: 'id' },
										{ text: 'Số lượng', key: 'quantity' },
										{ text: 'Ghi chú', key: 'note' },
									]}
									body={[
										{
											type: 'nắp',
											id: 'm1',
											name: 'nắp 1',
											quantity: '300',
											note: 'không',
										},
										{
											type: 'nắp',
											id: 'm1',
											name: 'nắp 1',
											quantity: '300',
											note: 'không',
										},
										{
											type: 'nắp',
											id: 'm1',
											name: 'nắp 1',
											quantity: '300',
											note: 'không',
										},
									]}
									onRowClick={showDetail}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WarehouseOverview;
