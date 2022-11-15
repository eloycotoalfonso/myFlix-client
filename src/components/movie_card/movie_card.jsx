import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class MovieCard extends React.Component{
    render(){
        const {movieData, onMovieClick} = this.props;
        return (
            <Card style = {{width: '18 rem'}}>
                <Card.Img variant = "top" src = {movieData.ImagePath}/>
                <Card.Body>
                    <Card.Title> {movieData.Title} </Card.Title>
                    <Card.Text> {movieData.Description} </Card.Text>
                    <Button onClick = {() => onMovieClick(movieData)} variant = "link"> Open </Button>
                </Card.Body>
            </Card>
        )
    }
}
