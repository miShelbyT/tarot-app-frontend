import React from 'react'
import { NavLink } from 'react-router-dom'

function ReadingName(props) {
    return (
        <div className="reading-name">
            <NavLink to={`/reading/${props.readingObj.id}`}>
                <h3>{props.readingObj.name || 'Unnamed'}</h3>
            </NavLink>
        </div>
    )
}



export default ReadingName