export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export function setMovies (value){
    return {
        type: SET_MOVIES, 
        value
    };
}

export function setFilter (value){
    return {
        type: SET_FILTER,
        value
    };
}

export function setUser(value){
    return{
        type: SET_USER,
        value
    };
}

export function updateUser(value){
    return{
        type: UPDATE_USER,
        value
    };
}

export function deleteUser(value){
    return{
        type: DELETE_USER,
        value
    };
}

export function addFav(value){
    return{
        type: ADD_FAV,
        value
    };
}

export function removeFav(value){
    return{
        type: REMOVE_FAV,
        value
    };
}


