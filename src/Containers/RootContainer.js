import React from 'react'
import Header from '../Components/Header'
import MainContainer from './MainContainer'

function RootContainer(){

  
  return(
    <div className="parent">
    <Header />
    <MainContainer />
    </div>
    )
    
}

export default RootContainer