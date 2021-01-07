import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCards, saveCards, getReading } from '../redux/actions'
import CardCard from '../Components/CardCard'

class CardContainer extends React.Component {

  state = {
    readingCards: [],
    cardsDrawn: 0,
    cardsSaved: false,
    lastKnownReadingId: 0,
  }

  componentDidMount() {
    this.props.getCards()
  }

  dealCards = () => {
    let randomCard
    let n = 3
    for (let i = 0; i < n; i++) {
      randomCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
      if (!this.state.readingCards.includes(randomCard)) {
        this.setState({
          readingCards: [...this.state.readingCards, randomCard]
        })
      } else {
        n++
      }
    }

  }

  // {this.state.beenSaved ? "render CardsCards and ReadingCard or readingObj": "render CardsCards (we'll conditionally hide readingForm separately? so we need another local this.state.beenSaved & ternary to toggle hide/show on the readingForm)" }

  renderCards = () => {
    let cardsArray = this.state.readingCards
    return (
      cardsArray.map((randomCard, i) => <CardCard cardIdx={i} key={randomCard.id} cardObj={randomCard} />)
    )
  }

  clickHandler = () => {
    // let question = prompt("What Is Your Question?", "What lies in my future?")
    // console.log(question)
    if (this.state.cardsDrawn < 5) {
      this.dealCards()
      this.setState((prevState) => ({ cardsDrawn: prevState.cardsDrawn + 1 }))
    }
  }

  componentDidUpdate(prevProps) {
    // console.log("prevprops:", prevProps.readingId)
    if (this.props.readingId !== this.state.lastKnownReadingId) {
      this.setState({lastKnownReadingId: this.props.readingId})
    }
    if (this.props.readingId !== this.state.lastKnownReadingId) {
      
      this.props.saveCards(this.state.readingCards, this.props.readingId)
      .then(() => this.props.getReading(this.props.readingId, this.props.history))      
    }
  }

  render() {
    // console.log(this.props.cards)
    return (
      <div className="card-container">
        <h2>Consult the Cards</h2>
        <h3>{this.props.question}</h3>
        <div style={{marginTop:40, display:"inline-block"}}></div>
        {this.state.cardsDrawn < 5 && !this.props.readingId > 0 ? <button style={{display:"inline-block"}} className="card-button" onClick={this.clickHandler}>Draw a Card</button> : null}
        <div className="inner-card-container">{this.props.cards.length === 0 ? <h1>Loading</h1> : this.renderCards()}</div>
      </div>
    )
  }
}

//Passing array of cards to state
const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    readingId: state.readingId,
    question: state.question
  }
}

//Passing function to get cards to props
const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(getCards()),
    saveCards: (cardsArray, readingId) => dispatch(saveCards(cardsArray, readingId)),
    getReading: (readingId, history) => dispatch(getReading(readingId, history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardContainer))

