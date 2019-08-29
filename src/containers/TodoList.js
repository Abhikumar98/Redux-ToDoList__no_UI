import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router-dom';
const visibleTodos = (todos, params)=>{
    console.log("ownProps ==========> ",params.filter);
    
    switch(params.filter){
        case 'all':
            return todos; //return all todos
        case 'active':
            return todos.filter(todo=> !todo.completed) //return all todos with completed : false
        case 'completed':
            return todos.filter(todo => todo.completed) //return all todos with completed : true
        default:
            return todos;
    }
}

const mapStateToProps = (state, ownProps) =>({
    todo : visibleTodos(state.todos, ownProps.match.params)
})

// calls actionCreator and pass id, which return an object to be dispatched
const mapDispatchToProps = dispatch => ({ toggle: id => {
    dispatch(toggleTodo(id))
}})

// passing props to ListItem component.
// these props are objects and have to be used by the name given as property
// eg. 'mapDispatchToProps' passes a prop of "toggle" which uses dispatch later

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
    )(ListItem));