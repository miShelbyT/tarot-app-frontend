import React from 'react'
import Header from '../Components/Header'
import MainContainer from './MainContainer'
import Welcome from '../Components/Welcome'

function RootContainer(){

  
  return(
    <>
    <Welcome />
    <div className="parent">
    <Header />
    <MainContainer />
    </div>
    </>
    )
    
}

export default RootContainer