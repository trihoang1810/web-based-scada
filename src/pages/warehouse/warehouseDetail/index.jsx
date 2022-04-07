import { useParams } from 'react-router-dom';
import WarehouseDetail from '../../../components/warehouseDetail/WarehouseDetail';
import CustomizedBreadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';

function WarehouseDetailPage() {
	const { id } = useParams();
	return (
		<>
			<CustomizedBreadcrumbs href="/warehouse" sector="KHO VẬN" id={id} />
			<WarehouseDetail />;
		</>
	);
}

export default WarehouseDetailPage;
