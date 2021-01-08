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
        <img style={{marginTop:"40px", height:"550px"}} src="https://i.imgur.com/GzbbKpE.png"
             alt="Eye Logo"
        />
        <br></br>
        {this.state.showModal ? null : <button onClick={this.signUpClickHandler} style={{}} className="submit-button">Sign Up</button>}
        { this.state.showModal ? <SignUpForm clickHandler={this.signUpClickHandler}/> : null }
      </div>
    )
  }
}

export default Welcome