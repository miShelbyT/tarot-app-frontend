import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../redux/actions'



class LogInForm extends React.Component {

    state = {
        ["user_name"]: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            ["user_name"]: "",
            password: ""
        })

    }

    render() {
        return (
            <div className="modal">
                <div className="modal-content">  
                    <h1>Third Eye Login:</h1>
                    <form className="login-form" onSubmit={this.submitHandler}>

                        <input
                            type="text"
                            value={this.state["user_name"]}
                            name={["user_name"]}
                            onChange={this.changeHandler}
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.changeHandler}
                            placeholder="Password"
                        />
                        <button className="submit-button" >Log In</button>
                    </form>
                    <br></br>
                    <button className="submit-button" onClick={this.props.clickHandler} >Go Back</button>
                    
                </div>
            </div>
        )
    }

}

const mdp = (dispatch) => {
    return {
        submitHandler: (userObj) => dispatch(logIn(userObj))
    }
}

export default connect(null, mdp)(LogInForm)