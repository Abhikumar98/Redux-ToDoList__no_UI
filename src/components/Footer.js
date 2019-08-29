import React from 'react'
import FilterLink from '../containers/FilterLink';

const Footer = ()=>{
    return(
        <div>
            Show : 
            <FilterLink filter='all'>
                All  {/* this will be available as children further */}
            </FilterLink>
            <FilterLink filter='active'>
                Active
            </FilterLink>
            <FilterLink filter='completed'>
                Completed
            </FilterLink>
        </div>
    )
}

export default Footer;