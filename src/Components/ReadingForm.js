import React from 'react'
import { connect } from 'react-redux'
import { createReading } from '../redux/actions'


class ReadingForm extends React.Component {
    
    state = {
        ["user_id"]: this.props.userId,
        name: "",
        question: "",
        ["user_comment"]: "",
        ["is_favorite"]: false
    }

    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
      e.preventDefault()
      this.props.submitHandler(this.state)
      this.setState({
        name: "",
        question: "",
        ["user_comment"]: ""
      })
  
    }

    render(){
        return(
            <div className="reading-form">
                <h1>Reading Form:</h1>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Name This Reading..."
                    /> <br></br><br></br>
                    <input
                        type="text"
                        value={this.state.question}
                        name="question"
                        onChange={this.changeHandler}
                        placeholder="hmm. What Is My Question...."
                    /><br></br><br></br>
                    <textarea
                        value={this.state["user_comment"]}
                        name="user_comment"
                        onChange={this.changeHandler}
                        placeholder="Comments my feelings blah blah blah"
                    /><br></br><br></br>
                    <button className="submit-button">Save Reading</button>
                </form>
            </div>
        )
    }


}

function mdp(dispatch){
    return {
        submitHandler: (readingObj) => dispatch(createReading(readingObj))
    }
}

function msp (state){
  return { userId: state.userId }
}

export default connect(msp,mdp)(ReadingForm)