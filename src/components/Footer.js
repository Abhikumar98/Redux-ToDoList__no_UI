import React from 'react'
import FilterLink from '../containers/FilterLink';

const Footer = ()=>{
    return(
        <div>
            Show : 
            <FilterLink filter={'SHOW_ALL'}>
                All  {/* this will be available as children further */}
            </FilterLink>
            <FilterLink filter={'SHOW_ACTIVE'}>
                Active
            </FilterLink>
            <FilterLink filter={'SHOW_COMPLETED'}>
                Completed
            </FilterLink>
        </div>
    )
}

export default Footer;