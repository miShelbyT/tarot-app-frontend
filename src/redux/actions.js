import {GET_CARDS, SIGN_UP, LOG_IN, LOG_OUT, CREATE_READING} from './actionTypes'


export const getCards = () => {
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/cards/")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            dispatch({ type: GET_CARDS, payload: data })
        })
        .catch(console.log)

  }
}

export const signUp = (userObj) => {
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/users/",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(r => r.json())
    .then(data => {
      console.log("Add User Fetch Data", data['user_name'])
      dispatch({type: SIGN_UP, payload: data})
      
    })
    .catch(console.log)
  }
}

export const logIn = (userObj) => {
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accepts":"application.json"
      },
      body: JSON.stringify(userObj)
    })
    .then(r=>r.json())
    .then(data => {
      if (data['user_name']){
        console.log("found user",data['user_name'])
      } else {
        console.log("user not found")
      }
    dispatch({type: LOG_IN, payload: data})
    })
    .catch(console.log)
  }
}

export const logOut = () => {
  return { type: LOG_OUT }
}

export const createReading = (readingObj) => {
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/readings",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body: JSON.stringify(readingObj)
    })
    .then(r => r.json())
    .then(data => {
      console.log("GOOD JOB Succesfully created reading!:",data)
    })
    .catch(console.log)
  }
  
}
