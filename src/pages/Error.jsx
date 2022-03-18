import React from 'react';
import NotFound from '../components/notfound/NotFound';
function Error() {
	return (
		<div>
			{/* <NotFoundImage width="100%" /> */}
			<div className="row">
				<div className="col-12">
					<NotFound />
				</div>
			</div>
		</div>
	);
}

export default Error;
