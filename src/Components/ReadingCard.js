import React from 'react'
import CardCard from './CardCard'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateReading, deleteReading, getReadings } from '../redux/actions'
import Grid from '@material-ui/core/Grid';





class ReadingCard extends React.Component {


    state = {
        ["user_comment"]: this.props.reading["user_comment"],
        beenClicked: false
    }

    // console.log("In Reading Card:",this.props)
    renderCards = () => {
        let cardsArray = this.props.reading.cards
        return (
            <Grid container>
                {cardsArray.map((cardObj, i) => (
                    <Grid item>
                        <CardCard cardIdx={i} key={cardObj.id} cardObj={cardObj} />
                    </Grid>
                ))}
            </Grid>
        )
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
            <div className="reading-card">
                <Grid container direction='column'>

                    <Grid item>
                        <h3>Reading Name: {this.props.reading.name}</h3>
                        <h4>My Question: {this.props.reading.question}</h4>
                    </Grid>
                    <Grid item>
                        <div >
                            {this.renderCards()}
                        </div>
                    </Grid>
                    <Grid item >
                        <div className="rc-comment">
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
                        </div>
                    </Grid>
                </Grid>
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
