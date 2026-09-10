
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const DeleteModal = ({ show, handleClose, handleMovieToDelete}) => {
	return (
		<>
			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>¿Estas seguro de que quieres eliminar esta pelicula?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancelar
					</Button>
					<Button variant="primary" onClick={handleMovieToDelete}>
						Elimiar Pelicula
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteModal;