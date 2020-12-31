import React from 'react'
import LogInForm from './LogInForm'
import { connect } from 'react-redux'
import { logOut } from '../redux/actions'

function Header(props){

    
    const clickHandler = () => {
        props.logOut()
    }
    
    return(
        <div className="header">
        <h1>Third Eye Tarot</h1>

        {props.user?  
        <>
        <h1>👁 Welcome {props.user}!!👁</h1>
        <button onClick={clickHandler}>Log Out Here</button>
        </>
        :
        <LogInForm />
        }
        </div>
    )

}

const msp = (state) => {
    return {user: state.user}
}

const mdp = (dispatch) => ({logOut: () => dispatch(logOut())})

export default connect(msp,mdp)(Header)