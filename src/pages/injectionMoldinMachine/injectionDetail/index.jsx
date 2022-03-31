import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@mui/material';
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

	useEffect(() => {
		const id = setTimeout(() => setValue(injectionMoldingMachineData), 0);

		return () => clearTimeout(id);
	}, []);

	return (
		<>
			<Breadcrumbs
				sx={{
					'& .MuiBreadcrumbs-ol': {
						'& .MuiBreadcrumbs-li': {
							'& .MuiTypography-root': {
								display: 'block',
								fontSize: '1.5em',
								marginBlockStart: '0.83em',
								marginBlockEnd: '0.83em',
								marginInlineStart: '0px',
								marginInlineEnd: '0px',
								fontWeight: 'bold',
							},
							'& .MuiLink-root': {
								marginBottom: '15px',
								textTransform: 'capitalize',
							},
							'& .MuiBreadcrumbs-separator': {
								fontSize: '1.5rem',
							},
						},
					},
				}}
				aria-label="breadcrumb"
			>
				<Link color="inherit" underline="hover" href="/injection/pages/1">
					KHU MÁY ÉP
				</Link>
				<Typography color="text.primary">{id}</Typography>
			</Breadcrumbs>
			{value ? <InjectionDetailComponent injectionMoldingMachineData={value} /> : <InjectionDetailComponent />}
		</>
	);
}

export default InjectionDetail;
