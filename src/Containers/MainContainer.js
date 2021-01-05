import React from 'react'
import ReadingForm from '../Components/ReadingForm'
import CardContainer from '../Containers/CardContainer'
// import ReadingCard from '../Components/ReadingCard'
import ReadingContainer from '../Containers/ReadingContainer'
import { Route, withRouter} from 'react-router-dom'
// import { connect } from 'react-redux'

function MainContainer(props) {
  
  
  return (
    <>
      
      <ReadingContainer />
      
      {props.match.path === '/home' ? 
      <>
        <ReadingForm />
        <CardContainer />
      </>
      :
      null
      }

      
       

    </>
  )

}


export default withRouter(MainContainer)