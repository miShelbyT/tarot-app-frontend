import React from 'react'
import Header from '../Components/Header'
import MainContainer from './MainContainer'
import Welcome from '../Components/Welcome'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

function RootContainer(props){

  
  return(
    <div className="parent">
    
    <Header />
    <Switch>
    <Route path="/welcome" render={() => <Welcome />} />
    <Route path="/home" render={() => <MainContainer />}/>
    </Switch>

    {props.user ? <Redirect to="/home"/> : <Redirect to="/welcome"/>}

    </div>
    )
    
}

function msp(state) {
  return { user: state.user }
}

export default connect(msp)(RootContainer)