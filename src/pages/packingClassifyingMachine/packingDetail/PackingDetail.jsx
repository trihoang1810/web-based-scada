import React from 'react';
import { useParams } from 'react-router-dom';

function PackingDetail() {
	const { id } = useParams();
	return <div>{id}</div>;
}

export default PackingDetail;
