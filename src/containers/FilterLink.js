import { Link } from 'react-router-dom';
import React from 'react'

const FilterLink = ({filter, children}) => (
    <Link to={ filter === 'all' ? '/': filter } 
          activeStyle={{ textDecoration: 'none', color : 'grey' }} 
          >
        {children}
    </Link>
)

export default FilterLink