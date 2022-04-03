import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

function CustomizedBreadcrumbs({ id, sector, href }) {
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
				<Link color="inherit" underline="hover" href={href}>
					{sector}
				</Link>
				<Typography color="text.primary">{id}</Typography>
			</Breadcrumbs>
		</>
	);
}

export default CustomizedBreadcrumbs;
