import { GET_CARDS, SIGN_UP, LOG_IN, LOG_OUT, CREATE_READING, SAVE_CARDS, GET_READING, FETCH_READINGS, GO_HOME, UPDATE_READING, DELETE_READING } from './actionTypes'


export const getCards = () => {
  return function (dispatch) {
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
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(r => r.json())
      .then(data => {
        if (!data['user_name']) {
          console.log("user creation failed")
          window.alert("Please Enter a Username and Password")
        }
        // console.log("Add User Fetch Data", data['user_name'])
        dispatch({ type: SIGN_UP, payload: data })

      })
      .catch(console.log)
  }
}


export const logIn = (userObj) => {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application.json"
      },
      body: JSON.stringify(userObj)
    })
      .then(r => r.json())
      .then(data => {
        if (data['user_name']) {
          console.log("found user", data['user_name'])
        } else {
          console.log("user not found")
          window.alert("Wrong Username or Password Please Try Again")
        }
        dispatch({ type: LOG_IN, payload: data })
      })
      .catch(console.log)
  }
}



export const logOut = () => {
  return { type: LOG_OUT }
}


export const createReading = (readingObj) => {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/readings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(readingObj)
    })
      .then(r => r.json())
      .then(newReadingObj => {
        // console.log("GOOD JOB Succesfully created reading!:", newReadingObj)
        dispatch({ type: CREATE_READING, payload: newReadingObj })
        // history.push(`/reading/${newReadingObj.id}`)
      })
      .catch(console.log)
  }
}


export const getReading = (readingId, history) => {
  return function (dispatch) {
    fetch(`http://localhost:3000/api/v1/readings/${readingId}`)
      .then(r => r.json())
      .then(newReadingObj => {
        // console.log("GOOD JOB Succesfully got reading!:", newReadingObj)
        dispatch({ type: GET_READING, payload: newReadingObj })
        history.push(`/reading/${newReadingObj.id}`)
      })
      .catch(console.log)
  }
}



export const saveCards = (cardsArray, readingId) => {
  return async (dispatch) => {
    for (let i = 0; i < cardsArray.length; i++) {
      const cardObj = cardsArray[i]
      let newCardObj = {
        ["card_id"]: cardObj.id,
        ["reading_id"]: readingId
      }

      await fetch("http://localhost:3000/api/v1/card_readings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(newCardObj)
      })
        .then(r => r.json())
        .then(data => {
          // console.log("Save Cards Post", data)
        })
    }


    dispatch({ type: SAVE_CARDS })
  }
}

export const getReadings = (userId) => {
  return function (dispatch) {
    return fetch("http://localhost:3000/api/v1/readings")
      .then(r => r.json())
      .then(readingArray => {
        let newArray = readingArray.filter(readingObj => readingObj['user_id'] === userId)
        // console.log("readings", newArray)
        dispatch({ type: FETCH_READINGS, payload: newArray })
      })
  }
}

export const goHome = () => {
  return { type: GO_HOME }
}

export const updateReading = (readingObj, readingId) => {
  return function (dispatch) {
    fetch(`http://localhost:3000/api/v1/readings/${readingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(readingObj),
    })
      .then(response => response.json())
      .then(newReadingObj => {
        console.log('Success updated reading:', newReadingObj)
        dispatch({type: UPDATE_READING, payload: newReadingObj})
      })
      .catch(console.log)
  }
}

export const deleteReading = (readingId, history) => {
  return function(dispatch){
    return fetch(`http://localhost:3000/api/v1/readings/${readingId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(
      dispatch({type:DELETE_READING, payload: readingId}),
      history.push("/home")
      )
    .catch(console.log)
  }
}

