import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InjectionDetailComponent from '../../../components/injectionDetail/InjectionDetail';
import CustomizedBreadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';

function InjectionDetail() {
	const [injectionMoldingMachineData, setInjectionMoldingMachineData] = useState({
		number: 'M1',
		name: 'axB12',
		percent: 30,
		state: 'R',
		cycle: '30 giây',
		openDoorTime: '7 giây',
		operatingTime: '1 tiếng 15 phút',
		wattage: 'small',
	});
	const { id } = useParams();
	const [value, setValue] = useState();

	useEffect(() => {
		const id = setTimeout(() => setValue(injectionMoldingMachineData), 0);

		return () => clearTimeout(id);
	}, [injectionMoldingMachineData]);

	return (
		<>
			<CustomizedBreadcrumbs href="/injection/pages/1" sector="KHU MÁY ÉP" id={id} />
			{value ? <InjectionDetailComponent injectionMoldingMachineData={value} /> : <InjectionDetailComponent />}
		</>
	);
}

export default InjectionDetail;
