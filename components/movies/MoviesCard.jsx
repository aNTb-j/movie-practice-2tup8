
/*
https://react-bootstrap.github.io/docs/getting-started/introduction

https://react-bootstrap.github.io/docs/components/cards
*/

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { useState } from 'react'

// https://react-bootstrap.netlify.app/docs/components/list-group/
// import ListGroup from 'react-bootstrap/ListGroup';


// Use <Card.Body> to pad content inside a <Card>.

const MoviesCard = ({title, img, rating, duration, summary, available}) => { // llaves / destructuring

    const [ newTitle, setNewTitle ] = useState(title);

    const handleTitleChange = () => {
        setNewTitle("Titulo A");

    }

    return (

        <Card style={
            {   
                width: '18rem',
                border: '2px',
                margin: '10px',
                alignItems: 'center'}
            }>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{newTitle}</Card.Title>
                <Card.Subtitle>{rating}</Card.Subtitle>
                <Badge>{available ? "Disponible" : "No disponible"}</Badge>
                <Card.Text>
                    {duration} minuto
                    {summary}
                </Card.Text>

                <Button variant="primary" onClick={handleTitleChange}>Cambiar Titulo</Button>
            </Card.Body>
        </Card>

    )
}

export default MoviesCard
