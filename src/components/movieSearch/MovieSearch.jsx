import Form from 'react-bootstrap/Form'

// El filtro se hace en movies

const MovieSearch = ({ handleMovieSearch }) => {

    return (
        <Form.Control
            type="text"
            placeholder="Buscar película"
            onChange={handleMovieSearch}
        />
    );
};

export default MovieSearch;