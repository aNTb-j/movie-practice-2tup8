/*
https://reactrouter.com/api/hooks/useNavigate 	
*/

import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFound = () => {

	const navigate = useNavigate()

	return (

		<Button onClick={() => navigate('/login')}>
			Go Back
		</Button>

	);
}

export default NotFound