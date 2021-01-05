import React from 'react'

function ReadingCard(props){

    console.log(props)
    
    return (
        <div className="reading-form-card">
        <h1>Reading</h1>
        <h3>{props.reading.name}</h3>
        <p>{props.reading.question}</p>
        <p>{props.reading["user_comment"]}</p>
        </div>
    )

}

export default ReadingCard