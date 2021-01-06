import React from 'react'

function CardCard(props) {

  return (
    <div className="card-card" >
      <h4 style={{ textAlign: "center", margin: "7px 7px"}}>{props.cardObj.name} </h4>
      <div className="card-img">
        <img style={{
          maxWidth: "200px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }} src={props.cardObj.img_url} alt={props.cardObj.name} />
        <p>Meaning: {props.cardObj.meaning}</p>
      </div>
    </div>
  )
}

{/* <div class="maincontainer">

<div class="thecard">

  <div class="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

  <div class="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p> */}

export default CardCard