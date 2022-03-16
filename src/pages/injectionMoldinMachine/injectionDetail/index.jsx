import { useParams } from 'react-router-dom';
import InjectionDetailComponent from '../../../components/injectionDetail/InjectionDetail';

function InjectionDetail() {
	const injectionMoldingMachineData = {
		number: 'M1',
		name: 'axB12',
		percent: 30,
		state: 'R',
		cycle: '30 giây',
		openDoorTime: '7 giây',
		operatingTime: '1 tiếng 15 phút',
		wattage: 'small',
	};
	const { id } = useParams();
	console.log(id);

	return <InjectionDetailComponent injectionMoldingMachineData={injectionMoldingMachineData} />;
}

export default InjectionDetail;
