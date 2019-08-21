import React from 'react';
import Todo from './Todo';

const ListItem = ({ todo, toggle }) => (
    <ul>
        {todo.map(item => <Todo key={item.id} {...item} onClick={()=> toggle(item.id)} />)}
        
        {/* {...item} spreads all the properties such as item.text, item.completed to be
            available as props to the component */}
    </ul>
)

export default ListItem;