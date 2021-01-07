import React from 'react'
import { NavLink } from 'react-router-dom'

function ReadingName(props) {
    return (
        <div>
            <NavLink to={`/reading/${props.readingObj.id}`}>
                <h3>{props.readingObj.name || 'Unnamed'}</h3>
                <hr style={{
                    borderWidth: 1,
                    borderColor:"rgb(155, 155, 155)",
                    borderStyle:"inset"
                }}></hr>
            </NavLink>
        </div>
    )
}



export default ReadingName