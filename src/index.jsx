import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import {connect} from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';

// import MainView from './components/main_view/main_view';


// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

//App with react - redux

const store = createStore(moviesApp, devToolsEnhancer());

//Main component (will eventually use all the others)

class MyFlixApplication extends React.Component {
    render(){
        return (
            <Provider store = {store}>
                <Container>
                    <MainView/>
                </Container>
            </Provider>
        )
    }
}

// FInds the root of your app
const container = document.getElementsByClassName('app-container')[0];

//Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);













//App with react
// Main component (will eventually use all the others)
// class MyFlixApplication extends React.Component {
//     render () {
//         return (
//             //Importing the component mainview
//             <Container>
//                 < MainView />
//             </Container>
//         );
//     }
// };


// FInds the root of your app
// const container = document.getElementsByClassName('app-container')[0];

//Tells React to render your app in the root DOM element
// ReactDOM.render(React.createElement(MyFlixApplication), container);
