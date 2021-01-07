import React from 'react'
import LogInForm from './LogInForm'
import { connect } from 'react-redux'
import { logOut, goHome } from '../redux/actions'
import { NavLink } from 'react-router-dom'

function Header(props) {


    const clickHandler = () => {
        props.logOut()
    }

    const homeClickHandler = () => {
        props.goHome()
    }

    return (
        <div className="header">
            {props.user ?
                <NavLink to='/home'>
                    <h1 onClick={homeClickHandler} className="app-name" >Third Eye Tarot</h1>
                </NavLink>
                :
                <h1 className="app-name" >Third Eye Tarot</h1>
            }

            {props.user ?
                <>
                    <h1 className="welcome-header">👁 Welcome {props.user}👁</h1>
                    <button className="logout-button" onClick={clickHandler}>Log Out</button>
                </>
                :
                <LogInForm />
            }
            <hr style={{
                borderWidth:3,
                borderColor:"dark grey"
            
            }}></hr>
            </div>
    )

}

const msp = (state) => {
    return { user: state.user }
}

const mdp = (dispatch) => ({
                logOut: () => dispatch(logOut()),
    goHome: () => dispatch(goHome())
})

export default connect(msp, mdp)(Header)