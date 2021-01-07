import React from 'react'
import SignUpForm from './SignUpForm'

class Welcome extends React.Component {

  state = {
    showModal: false
  }

  signUpClickHandler = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render(){
    return (
      <div style={{textAlign:"center"}}className="welcome">
        <button onClick={this.signUpClickHandler} style={{marginTop:40}} className="submit-button">{this.state.showModal ? "Never Mind" : "Sign Up"}</button>
        { this.state.showModal ? <SignUpForm clickHandler={this.signUpClickHandler}/> : null }
      </div>
    )
  }
}

export default Welcome