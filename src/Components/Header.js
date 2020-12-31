import React from 'react'
import LogInForm from './LogInForm'
import { connect } from 'react-redux'

function Header(props){

    return(
        <div className="header">
        <h1>Third Eye Tarot</h1>
        <h1>👁 Welcome {props.user}!!👁</h1>
        <LogInForm />
        </div>
    )

}

const msp = (state) => {
    return {user: state.user}
}

export default connect(msp)(Header)