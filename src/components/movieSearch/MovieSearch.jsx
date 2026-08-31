import { useState } from 'react';

// El filtro se hace en movies

const MovieSearch = ({ movieSearch, completeMovies }) => {

    const [movieResult, setMovieResult] = useState("");

    const onMovieSearch = (movieSearch, completeMovies) => {
        setMovieResult(completeMovies.filter((movie) => movie.title.toLowerCase().includes(movieSearch.toLowerCase())))
    }

    return (
        <div>MovieSearch</div>
    )
}

export default MovieSearch