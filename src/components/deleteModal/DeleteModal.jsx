import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const DeleteModal = ({ show }) => {

	const [newShow, setNewShow ] = useState(show)

	function handleClose() {
		setNewShow(false)
	}

	return (
		<>


			<Modal show={newShow} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteModal;