import React from 'react'
import Header from '../Components/Header'
import MainContainer from './MainContainer'
import Welcome from '../Components/Welcome'

function RootContainer(){

  
  return(
    <div className="parent">
    <Header />
    <Welcome />
    <MainContainer />
    
    </div>
    )
    
}

export default RootContainer