import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import { toggleTodo } from '../actions';

const visibleTodos = (todos, filter)=>{
    switch(filter){
        case 'SHOW_ALL':
            return todos; //return all todos
        case 'SHOW_ACTIVE':
            return todos.filter(todo=> !todo.completed) //return all todos with completed : false
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed) //return all todos with completed : true
        default:
            return todos;
    }
}

// getting the visible items based on the visibility filter selected.
// state.visibilityFilter gives a value based on link selected.
const mapStateToProps = state =>({todo : visibleTodos(state.todos, state.visibilityFilter)})

// calls actionCreator and pass id, which return an object to be dispatched
const mapDispatchToProps = dispatch => ({ toggle: id => {
    dispatch(toggleTodo(id))
}})

// passing props to ListItem component.
// these props are objects and have to be used by the name given as property
// eg. 'mapDispatchToProps' passes a prop of "toggle" which uses dispatch later

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ListItem);