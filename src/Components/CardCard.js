import react from 'react'

function CardCard(props){

    return(
        <div className="card-card" >
          <h4 style={{textAlign:"center"}}>{props.cardObj.name} </h4>
          <div  className="card-img">
          <img style={{
              maxWidth:"200px",
              display:"flex"
              }} src={props.cardObj.img_url} alt={props.cardObj.name}/>
              <p1>Meaning: {props.cardObj.meaning}</p1>
          </div>
        </div>
    )

}

export default CardCard