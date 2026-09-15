import Form from 'react-bootstrap/Form'

// El filtro se hace en movies

const MovieSearch = ({ handleMovieSearch }) => {

	return (
		<div>
			<Form>
				<Form.Control
					type="text"
					placeholder="Buscar película"
					onChange={handleMovieSearch}
				/>
			</Form>
			<br/>
		</div>
	);
};

export default MovieSearch;