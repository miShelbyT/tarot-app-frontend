import {GET_CARDS, ADD_USER, FIND_USER} from './actionTypes'


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

export const addUser = (userObj) => {
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
      dispatch({type: ADD_USER, payload: data})
      
    })
    .catch(console.log)
  }
}

export const findUser = (userObj) => {
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
    dispatch({type: FIND_USER, payload: data})
    })
    .catch(console.log)
  }
}