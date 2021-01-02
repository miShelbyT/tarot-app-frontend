import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../redux/actions'
import CardCard from '../Components/CardCard'

class CardContainer extends React.Component {
  
  componentDidMount(){
    this.props.getCards()
  }

  renderCards = () => {

    let cards = []
    let randomCard
    let n = 3
    for (let i = 0; i < n; ++i) {
      randomCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
      if (!cards.includes(randomCard)){
        cards.push(randomCard)
      } else {
       n++
     }
    }
    return (
      cards.map(randomCard => <CardCard key={randomCard.id} cardObj={randomCard} />)
    )
  }


  render() {
    // console.log(this.props.cards)
    return (
      <div className="card-container">
        <h2>Card Container</h2>
        {this.props.cards.length === 0 ? <h1>Loading</h1> : this.renderCards()}
      </div>
    )
  }

}

//Passing array of cards to state
const mapStateToProps = (state) => {
  return { cards: state.cards }
}

//Passing function to get cards to props
const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(getCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)

