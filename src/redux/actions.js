import {GET_CARDS} from './actionTypes'

export const getCards = () => {
  // console.log("first dispatch invoked")
  return function(dispatch){
    // console.log("nested function invoked", dispatch)
// anonymous function, we don't need to give it a variable name bc we won't be calling it.
    fetch("http://localhost:3000/api/v1/cards/")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            dispatch({ type: GET_CARDS, payload: data })
        })
        .catch(console.log)

// ...........something is wrong with line 16? everything works fine until in comment that line back in - initial fetch does not work on render................

// need to pass dispatch as an argument and then use dispatch inside the second .then - inception! we are using dispatch twice. once for the original mdp and again after the data has returned in the 2nd .then.

  }
}