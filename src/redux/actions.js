import {GET_CARDS} from './actionTypes'
import {ADD_USER} from './actionTypes'

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
      console.log("Add User Fetch Data",data)
    })
    .catch(console.log)
  }
}