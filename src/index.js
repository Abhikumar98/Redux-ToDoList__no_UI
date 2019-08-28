import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

// all the operations are taking place in configure store 
// and it returns a store object

const store = configureStore();

// The Application starts from here.
// Provider passes the store to children components.

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// Following the conventional folder structure

// components folder --------> Only presentational components,
//                               means components used only for displaying data and manipulating

// containers folder --------> Only for passing the state and dispatch functions as props to respective 
//                              components file.
//                              passes the state and dispatch as props to presentational components

// reducers folder ----------> Contains only reducers

// actions folder --------------> Contains actions for the dispatch functions. Helps in writing cleaner code.