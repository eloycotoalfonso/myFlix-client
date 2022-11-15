import React from 'react';
import{Container, Row, Col, Button} from 'react-bootstrap';

export class MovieView extends React.Component {
    render(){
        const { movieData, onBackClick } = this.props;
        
        if(!movieData) return null;

        return(
            <Container className = "movie-view">
                <Row>
                    <Col>
                        <div className = "movie-view">
                            <div className = "movie-poster">
                            <img src = {movieData.imagePath} />
                            </div>
                        </div>
                        <div className = "movie-title">
                            <span className = "label"> Title: </span>
                            <span className = "value"> {movieData.Title} </span>
                        </div>
                        <div className = "movie-description">
                            <span className = "label"> Description: </span>
                            <span className = "value">{movieData.Description} </span>
                        </div>
                        <div className = "movie-genre">
                            <span className = "label"> Genre: </span>
                            <span className = "value">{movieData.Genre} </span>
                        </div>
                        <div className = "movie-director">
                            <span className = "label"> Director: </span>
                            <span className = "value">{movieData.Director} </span>
                        </div>
                
                        <Button onClick = {() =>{ onBackClick(null); }}> Back to movies </Button>

                    </Col>
                </Row>
            </Container>
            

        );
    }
}