import React from 'react'
import { useHistory } from 'react-router-dom'

function HomeCard(props) {

    let history = useHistory();

    function learnHandleClick() {
        history.push("/learn-more");
    }
    function readingHandleClick() {
        history.push('/new-reading');
    }

    return (
        <div className="card-container">
            <h1>Third Eye Tarot</h1>

            <button onClick={readingHandleClick}className="submit-button">Consult the Cards</button>

            <button onClick={learnHandleClick} className="submit-button">Learn More</button>
        </div>
    )

}

export default HomeCard