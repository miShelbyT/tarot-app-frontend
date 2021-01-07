import React from 'react'
import { connect } from 'react-redux'
import { askQuestion } from '../redux/actions'
import { withRouter } from 'react-router-dom'





class QuestionModal extends React.Component {

    state = {
        question: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.question)
        this.props.history.push('/new-reading');
        this.setState({question:""})
    }

    render() {
        return (
            <div className="modal">
                <div style={{ textAlign: "center" }} className="modal-content">
                    <h1>What do you wish to ask the cards?</h1>
                    <br></br>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name="question"
                            value={this.state.question}
                            onChange={this.changeHandler}
                        />
                        <button className="submit-button">Ask the Cards</button>
                    </form>
                    <button onClick={this.props.clickHandler} className="submit-button">Cancel</button>
                </div>
            </div>
        )
    }

}

const mdp = (dispatch) => {
    return { submitHandler: (question) => dispatch(askQuestion(question)) }
  }

export default withRouter(connect(null, mdp)(QuestionModal))