import React from 'react';
import './director_view.scss'
import {connect} from 'react-redux';


import {Container, Row, Col, Button} from 'react-bootstrap';

export function DirectorView (director, onBackClick) {
    // console.log(props)
    // const {director, onBackClick} = props;
    // console.log("you are in the director view");
    // console.log(director);
    
    return(
        <Container className = "director-view">

            <div className = "director-name">
                <span className = "label"> Director: </span>
                <span className = "value"> {director.Name} </span>
            </div>
            <div className = "director-birthday">
                <span className = "label"> Birth: </span>
                <span className = "value"> {director.Birth} </span>
            </div>            
            <div className = "director-bio">
                <span className = "label"> Biography: </span>
                <span className = "value"> {director.Bio} </span>
            </div>

            <Button onClick = {() =>{ onBackClick(null); }}> Back to the movie </Button>
        </Container>
        

    );
}

const mapStateToProps = (state) =>{
    return{
        movies: state.movies,
        user:state.user
    };
};

export default connect (mapStateToProps) (DirectorView)