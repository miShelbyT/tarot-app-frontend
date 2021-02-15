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
                
                        <NavLink to={this.props.user ? '/home' : '/welcome'}>
                            <img onClick={this.homeClickHandler}
                                src="https://i.imgur.com/pMSWzhw.png"
                                alt="Eye Logo"
                            />
                        </NavLink>
                        <NavLink to={this.props.user ? '/home' : '/welcome'}>
                            <h1 onClick={this.homeClickHandler} className="app-name" >Third Eye Tarot</h1>
                        </NavLink>
                    
                        {this.props.user ?
                            <>
                                <h2 className="welcome-header" >Welcome, {this.props.user}</h2>
                                <button className="logout-button" onClick={this.clickHandler}>Log Out</button>
                            </>
                            :
                            <>


                                {this.state.showModal ? null : <button onClick={this.logInClickHandler} className="submit-button" >Log In</button>}



                                {this.state.showModal ? <LogInForm clickHandler={this.logInClickHandler} /> : null}
                            </>
                        }
                    
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