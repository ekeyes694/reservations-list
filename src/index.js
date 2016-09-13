import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './redux/store';

let initialState = {
    todos: [
        /**{
            id: 0,
            completed: false,
            name: 'Guest Names go here!',
            time: 'Reservation Times go here!',
            party: 'Number in Party goes here!',
            pager: 'Pager Number goes here!'
        }**/
    ],
    user: {
        username: 'Eddie',
        id: ''
    }
}

let store = configureStore(initialState)

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root')
);