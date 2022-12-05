import React from 'react';
import {connect} from 'react-redux';

import {Container, Row, Col, Button} from 'react-bootstrap';

export function GenreView (genre, onBackClick) {
    // const {genre, onBackClick} = props;
    
    return(
        <Container className = "genre-view">

            <div className = "genre-name">
                <span className = "label"> Genre: </span>
                <span className = "value"> {genre.Name} </span>
            </div>
            <div className = "genre-Description">
                <span className = "label"> Description: </span>
                <span className = "value"> {genre.Description} </span>
            </div>
            <Button onClick = {() =>{ onBackClick(null); }}> Back to the movie </Button>
        </Container>
        

    );
}

const mapStateToProps = (state) => {
    return{
        movies: state.movies,
        user: state.user
    };
};

export default connect(mapStateToProps)(GenreView);