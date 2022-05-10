import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'oidc-react';
function SignInOidc() {
	const { userData } = useAuth();
	const history = useHistory();
	React.useEffect(() => {
		if (userData) {
			history.push('/');
		}
	}, [history, userData]);
	return <div>Redirecting...</div>;
}

export default SignInOidc;
