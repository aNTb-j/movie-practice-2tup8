import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import DeleteModal from '../deleteModal/DeleteModal';

const MovieItem = ({ id, title, imageUrl, rating, duration, summary, available, handleMovieData, handleMovieDelete }) => {

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const handleData = (e) => {
		e.preventDefault();
		const data = title
		handleMovieData(data)
	}

	const handleMovieToDelete = (e) => {
		e.preventDefault();
		const data = id
		console.log(id)
		handleMovieDelete(data)
	}


	return (
		<section>
			<DeleteModal 
				show={show} 
    			handleClose={handleClose}
				handleMovieToDelete={handleMovieToDelete}  
			/>
			<Card bg="dark" text="light" className="h-100 shadow-lg border-secondary movie-card">
				<Card.Img variant="top" src={imageUrl} className="object-fit-cover movie-card-img" />
				<Card.Body className="d-flex flex-column">
					<div className="d-flex justify-content-between align-items-start gap-2 mb-2">
						<Card.Title className="mb-0 movie-card-title">{title}</Card.Title>
						<Badge bg={available ? "success" : "danger"} className="text-nowrap">
							{available ? "Disponible" : "No disponible"}
						</Badge>
					</div>
					<Card.Subtitle className="mb-2 text-warning">⭐ {rating} puntos · {duration} min</Card.Subtitle>
					<Card.Text className="flex-grow-1 text-light-emphasis movie-card-summary">{summary}</Card.Text>
					<Button variant="outline-light" onClick={handleData} className="mt-auto">Seleccionar Pelicula</Button>
					<Button variant="outline-light" onClick={handleShow} className="mt-auto">Eliminar Pelicula</Button>

				</Card.Body>
			</Card>
		</section>
	)
}

export default MovieItem