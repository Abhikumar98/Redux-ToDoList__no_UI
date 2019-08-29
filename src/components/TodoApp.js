import React, { Component } from 'react';
import Footer from './Footer';
import TodoInput from '../containers/TodoInput';
import TodoList from '../containers/TodoList';

// Parent component, contains all the containers / presentational components to be shown. 

class TodoApp extends Component {
    
    render() {
        return (
            <div>
                <TodoInput />
                <TodoList />
                <Footer />
            </div>
        )
    }
}

export default TodoApp;