import { useEffect, useState } from 'react';
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
	const [value, setValue] = useState();
	console.log(id);

	useEffect(() => {
		const id = setTimeout(() => setValue(injectionMoldingMachineData), 2000);

		return () => clearTimeout(id);
	}, []);

	return <>{value ? <InjectionDetailComponent injectionMoldingMachineData={value} /> : <InjectionDetailComponent />}</>;
}

export default InjectionDetail;
