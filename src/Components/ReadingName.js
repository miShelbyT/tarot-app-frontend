import React from 'react'
import { NavLink } from 'react-router-dom'

function ReadingName(props) {

    return (
        <>
            <NavLink to={`/reading/${props.readingObj.id}`}>
                <h3>{props.readingObj.name}</h3>
            </NavLink>
        </>
    )

}



export default ReadingName