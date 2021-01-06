import React from 'react'
import CardCard from './CardCard'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateReading, deleteReading, getReadings } from '../redux/actions'




class ReadingCard extends React.Component {


    state = {
        ["user_comment"]: this.props.reading["user_comment"],
        beenClicked: false
    }

    // console.log("In Reading Card:",this.props)
    renderCards = () => {
        let cardsArray = this.props.reading.cards
        return (
            cardsArray.map(cardObj => <CardCard key={cardObj.id} cardObj={cardObj} />)
        )
    }

    readingHandleClick = () => {
        this.props.history.push('/new-reading');
    }

    formClickHandler = () => {
        this.setState({
            beenClicked: !this.state.beenClicked,
            ["user_comment"]: this.props.reading["user_comment"],
        })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let readingObj = {
            ["user_comment"]: this.state["user_comment"]
        }
        this.props.updateReading(readingObj, this.props.reading.id)
        this.setState({
            beenClicked: !this.state.beenClicked,
            ["user_comment"]: this.state["user_comment"]
        })

    }

    deleteClickHandler = () => {
        this.props.deleteReading(this.props.reading.id, this.props.history).then(x => {
            this.props.getReadings(this.props.reading["user_id"])
        })
    }



    render() {
        // console.log(this.state["user_comment"])
        return (
            <div className="card-container">
                <h1>{this.props.reading.name}</h1>
                <h3>{this.props.reading.question}</h3>
                {this.renderCards()}
                {!this.state.beenClicked ?
                    <h3>{this.props.reading["user_comment"]}</h3>
                    :
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name="user_comment"
                            value={this.state["user_comment"]}
                            onChange={this.changeHandler}
                        />
                        <button className="submit-button">Update</button>
                    </form>
                }
                <button className="submit-button" onClick={this.formClickHandler}>{!this.state.beenClicked ? "Edit Comment" : "Hide Form"}</button>
                <button className="submit-button" onClick={this.deleteClickHandler}>Delete Reading</button>
                <button className="submit-button" onClick={this.readingHandleClick}>New Reading</button>

            </div>
        )
    }

}

function mdp(dispatch) {
    return {
        updateReading: (readingObj, readingId) => dispatch(updateReading(readingObj, readingId)),
        deleteReading: (readingId, history) => dispatch(deleteReading(readingId, history)),
        getReadings: (userId) => dispatch(getReadings(userId))
    }
}

export default withRouter(connect(null, mdp)(ReadingCard))
