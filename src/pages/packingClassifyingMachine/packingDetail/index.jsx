import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import PackingDetailComponent from '../../../components/packingDetail/PackingDetail';

function PackingDetail() {
	const { id } = useParams();
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
				<Link color="inherit" underline="hover" href="/package">
					KHU KIỂM TRA ĐÓNG GÓI
				</Link>
				<Typography color="text.primary">CỤM MÁY {id.split('module')[1]}</Typography>
			</Breadcrumbs>
			<PackingDetailComponent/>
		</>
	);
}

export default PackingDetail;
