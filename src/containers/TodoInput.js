/* eslint-disable no-lone-blocks */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const TodoInput = ({dispatch}) => {
    let text;
    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!text.value.trim()) {
                    return
                }
                dispatch(addTodo(text.value)) 
                {/* calls the actionCreator addTodo and passes the value 
                which would return an object to be passed in dispatch*/}
                text.value = ''
            }}>
                <input ref={node => text = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

// connect() provides with state and dispatch props
// the Component in the next parenthesis is the component receiving the props.
// here only the dispatch is being used by the same component.

export default connect()(TodoInput);