import React from 'react'
import LogInForm from './LogInForm'
import { connect } from 'react-redux'
import { logOut, goHome, logIn } from '../redux/actions'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

    state = {
        showModal: false
    }

    logInClickHandler = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    clickHandler = () => {
        this.props.logOut()
        this.setState({ showModal: false })
    }

    homeClickHandler = () => {
        this.props.goHome()
    }

    componentDidMount = () => {
        this.props.submitHandler(undefined)
    }


    render() {

        return (
            <div className="header">
                {this.props.user ?
                    <NavLink to='/home'>
                        <h1 onClick={this.homeClickHandler} className="app-name" style={{ marginLeft: 30 }} >Third Eye Tarot</h1>
                    </NavLink>
                    :
                    <h1 className="app-name" style={{ marginLeft: 30 }}>Third Eye Tarot</h1>
                }

                {this.props.user ?
                    <>
                        <h1 className="welcome-header" >Welcome {this.props.user}</h1>
                        <button className="logout-button" onClick={this.clickHandler}>Log Out</button>
                    </>
                    :
                    <>
                        {this.state.showModal ? null : <button style={{ marginLeft: 1000 }} onClick={this.logInClickHandler} className="submit-button" >Log In</button>}

                        {this.state.showModal ? <LogInForm clickHandler={this.logInClickHandler} /> : null}
                    </>
                }
                {/* <hr style={{
                    borderWidth:2,
                    borderColor:"rgb(62, 9, 88)"
                
                }}></hr> */}
            </div>
        )
    }

}

const msp = (state) => {
    return { user: state.user }
}

const mdp = (dispatch) => ({
    logOut: () => dispatch(logOut()),
    goHome: () => dispatch(goHome()),
    submitHandler: (userObj) => dispatch(logIn(userObj))
})

export default connect(msp, mdp)(Header)