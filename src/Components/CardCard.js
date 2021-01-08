import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

class CardCard extends React.Component {


  state = {
    cardClicked: false
  }

  cardClickHandler = () => {
    this.setState({ cardClicked: !this.state.cardClicked })
  }

  cardMsg = () => {
    switch (this.props.cardIdx) {
      case 0: return "The Current Situation"
      case 1: return "Events in the Past"
      case 2: return "Events in the Future"
      case 3: return "The Conscious Mind"
      case 4: return "The Subconscious Mind"
    }
    return "unexpected card idx"
  }

  render() {


    return (
      <>

        <Grid container direction='column' alignItems="flex-start" justify="center" >
          <Grid item style={{ textAlign: "center", paddingLeft: 35, }}>
            <h4 style={{ margin: 0 }}>{!this.state.cardClicked ? null : this.cardMsg()}</h4>
          </Grid>
          <Grid item>
            <div >

              <div onClick={this.cardClickHandler} className={`flip-card ${!this.state.cardClicked ? "" : "flipped"}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={this.props.cardObj.img_url} alt="Card Front" style={{
                      height: "320px",

                    }} />

                  </div>
                  <div className="flip-card-back">
                    <img src={"https://i.imgur.com/MLTnHgw.png"} alt="Card Back" style={{
                      height: "320px",

                    }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 330 }} />
          </Grid>
          <Grid item>
            <div className="meaning-div" >
              {!this.state.cardClicked ? null :
                <>
                  <h4 style={{ textAlign: "justify", paddingLeft: 40 }}>{this.props.cardObj.name} </h4>
                  <p>{this.props.cardObj.meaning}</p>

                </>
              }
            </div>
          </Grid>




        </Grid>
      </>
    )
  }
}

export default CardCard

