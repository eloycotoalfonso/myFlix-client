
import React, {useState} from 'react';
import propTypes from 'prop-types';

export function LoginView (props){
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username, password);
        // Send a request to the server for authentification
        // then call props.onLoggedIn(username)
        props.onLoggedIn(username)
    };

    const notRegister = (e) =>{
        e.preventDefault();
        props.onRegistration(1);

    }

    /*onRegistrated(username){
        this.setState({
            username
        });
    }*/

    return(
        <form>
            <label>
                Username:
                <input type = "text" value = {username} onChange = {e => setUsername(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type = "password" value = {password} onChange ={e => setPassword(e.target.value)}/>
            </label>
            <button type = "submit" onClick = {handleSubmit}> Submit </button>
            
            <a href = "" onClick = {notRegister}> Not registered yet?</a>
        </form>
        
    );
}
