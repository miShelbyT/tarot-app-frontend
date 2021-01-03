import React from 'react'
import { connect } from 'react-redux'
import { getCards,saveCards } from '../redux/actions'
import CardCard from '../Components/CardCard'

class CardContainer extends React.Component {
  
  state = {
    readingCards: [],
    cardsDrawn: 0,
    cardsSaved: false
  }
  
  componentDidMount(){
    this.props.getCards()
  }

  dealCards = () => {
    // let cards = []
    let randomCard
    let n = 3
    for (let i = 0; i < n; ++i) {
      randomCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
      if (!this.state.readingCards.includes(randomCard)){
        // cards.push(randomCard)
        // console.log("deal cards",cards)
        this.setState({
          readingCards: [...this.state.readingCards, randomCard]
        })
      } else {
       n++
     }
    }

  }

  renderCards = () => {
    let cardsArray = this.state.readingCards
    return (
      cardsArray.map(randomCard => <CardCard key={randomCard.id} cardObj={randomCard} />)
    )
  }

  clickHandler = () => {
    if(this.state.cardsDrawn < 5){
      this.dealCards()
      this.setState((prevState) =>({ cardsDrawn: prevState.cardsDrawn + 1 }))
    }
  }

  componentDidUpdate() {
      if (this.props.readingId > 0){
          this.props.saveCards(this.state.readingCards, this.props.readingId)
          console.log("in save cards function:",this.state.readingCards)
          this.setState({ cardsSaved: true})
      }
  }

  render() {
    // console.log(this.props.cards)
    return (
      <div className="card-container">
        <h2>Consult the Cards</h2>
        {this.props.cards.length === 0 ? <h1>Loading</h1> : this.renderCards() }
        {this.state.cardsDrawn < 5 && !this.state.cardsSaved ? <button className="card-button" onClick={this.clickHandler}>Draw a Card</button> : null}
      </div>
    )
  }

}

//Passing array of cards to state
const mapStateToProps = (state) => {
  return { 
    cards: state.cards,
    readingId: state.readingId
  }
}

//Passing function to get cards to props
const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(getCards()),
    saveCards: (cardsArray, readingId) => dispatch(saveCards(cardsArray, readingId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)

