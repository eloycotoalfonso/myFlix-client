
import React from 'react';
import {MovieCard} from '../movie_card/movie_card';
import{MovieView} from '../movie_view/movie_view';

import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';

export class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
            movies: [
                {_id: 1, Title: 'Inception', Description: 'description 1....', ImagePath: '...', Genre: 'Thriller', Director: 'Christopher Nolan'},
                {_id: 2, Title: 'Gladiator', Description: 'description 2....', ImagePath: '...', Genre: 'Historical', Director: 'Stieven Spielberg' },
                {_id: 3, Title: 'Silver Linings Playbook', Description: 'description 3....', ImagePath: '...', Genre: 'Drama', Director: 'David O. Russell'}
            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie){
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const {movies, selectedMovie} = this.state;
        
        if(movies.lenght === 0){
            return <div className = "main-view"> The list is empty! </div>;
        }
        
        return (
            <div className = "main-view">
                { selectedMovie
                    ? (
                        <Row className = "justify-content-md-center">
                            <Col md = {8}>
                                <MovieView movieData = {selectedMovie} onBackClick = {newSelectedMovie =>{ this.setSelectedMovie(newSelectedMovie);}}/>
                            </Col>
                        </Row>
                    )
                    : (
                        <Row className = "justify-content-md-center">
                            {movies.map(movie => (
                                <Col md = {3}>
                                    <MovieCard key = {movie._id} movieData = {movie} onMovieClick = {(movie) => {this.setSelectedMovie (movie)}} />
                                </Col>
                            ))}
                        </Row>
                    )
                }        
            </div>        
        );
    }
}