import React from 'react'
import ReadingForm from '../Components/ReadingForm'
import CardContainer from '../Containers/CardContainer'
// import ReadingCard from '../Components/ReadingCard'
import ReadingContainer from '../Containers/ReadingContainer'
import { Route, withRouter, Redirect} from 'react-router-dom'
// import { connect } from 'react-redux'

function MainContainer(props) {
  
  const clickHandler = () => {
    console.log("Clicking Button!!!")
    return <Redirect to="/home"/>
  }

  return (
    <>
      
      <ReadingContainer />
      
      {props.match.path === '/home' ? 
      <>
        <ReadingForm />
        <CardContainer />
      </>
      :
      <button className="submit-button" onClick={clickHandler}>New Reading</button>
      }

      
       

    </>
  )

}


export default withRouter(MainContainer)