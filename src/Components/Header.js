import React from 'react'
import LogInForm from './LogInForm'
import { connect } from 'react-redux'
import { logOut, goHome, logIn } from '../redux/actions'
import Grid from '@material-ui/core/Grid';
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
                <Grid container spacing={4} alignItems='center' justify='center'>


                    <Grid item>
                        <NavLink to={this.props.user ? '/home' : '/welcome'}>
                            <img onClick={this.homeClickHandler}
                                style={{ height: 70, marginTop: 5, display: "inline-block" }}
                                src="https://i.imgur.com/IaiHjdD.png"
                                alt="Eye Logo"
                            />
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to={this.props.user ? '/home' : '/welcome'}>
                            <h1 onClick={this.homeClickHandler} className="app-name" style={{}}>Third Eye Tarot</h1>
                        </NavLink>
                    </Grid>

                    <Grid item>
                        {this.props.user ?
                            <>
                                <h1 style={{marginLeft:"550px"}} className="welcome-header" >Welcome {this.props.user}</h1>
                                <button className="logout-button" onClick={this.clickHandler}>Log Out</button>
                            </>
                            :
                            <>


                                {this.state.showModal ? null : <button style={{ marginLeft: 900 }} onClick={this.logInClickHandler} className="submit-button" >Log In</button>}



                                {this.state.showModal ? <LogInForm clickHandler={this.logInClickHandler} /> : null}
                            </>
                        }
                    </Grid>

                </Grid>
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