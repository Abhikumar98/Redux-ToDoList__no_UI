import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { saveTolocalstorage, loadState } from './localstorage';

const initialState = loadState();

const store = createStore(rootReducer,initialState);

store.subscribe(() => saveTolocalstorage({ todos: store.getState().todos}))

// The Application starts from here.
// Provider passes the store to children components.

const Root = ()=>{
        return (
            <Provider store={store}>
                <TodoApp />
            </Provider>
        )
    }

ReactDOM.render(<Root />, document.getElementById('root'));

// Following the conventional folder structure

// components folder --------> Only presentational components,
//                               means components used only for displaying data and manipulating

// containers folder --------> Only for passing the state and dispatch functions as props to respective 
//                              components file.
//                              passes the state and dispatch as props to presentational components

// reducers folder ----------> Contains only reducers

// actions folder --------------> Contains actions for the dispatch functions. Helps in writing cleaner code.