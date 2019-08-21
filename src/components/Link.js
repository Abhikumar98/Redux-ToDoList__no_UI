import React from 'react'

const Link = ({ children, active, onClick }) => {
    if(active){
        return <span>{children}</span>
    }
    return(
        <div>
            {/* onClick = {onClick}  both are different one is to detect any clicks and another is a prop */}
            <a href="#" onClick={onClick}>
                {/* uses the text given inside FilterLink component as children */}
                {children}
            </a>
        </div>
    )
}

export default Link;