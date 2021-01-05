import React from 'react'
import CardCard from './CardCard'


function ReadingCard(props){

    // console.log("In Reading Card:",props)
    const renderCards = () => {
        let cardsArray = props.reading.cards
        return (
          cardsArray.map(cardObj => <CardCard key={cardObj.id} cardObj={cardObj} />)
        )
      }
    
    return (
        <div className="card-container">
        <h1>{props.reading.name}</h1>
        <h3>{props.reading.question}</h3>
        {renderCards()}
        <h3>{props.reading["user_comment"]}</h3>
        </div>
    )

}

export default ReadingCard
