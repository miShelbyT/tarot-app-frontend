import { combineReducers } from 'redux'
import { GET_CARDS, SIGN_UP, LOG_IN, LOG_OUT, CREATE_READING, SAVE_CARDS, GET_READING, FETCH_READINGS, GO_HOME, UPDATE_READING, DELETE_READING, ASK_QUESTION } from './actionTypes'


const defaultState = {
  cards: [],
  user: null,
  userId: 0,
  readingId: 0,
  readings: [],
  question: ""
}


function cardsReducer(currentState = defaultState.cards, action) {

  switch (action.type) {
    case GET_CARDS:
      return action.payload
    default:
      return currentState
  }

}

function userReducer(currentState = defaultState.user, action) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload['user_name']
    case LOG_IN:
      return action.payload['user_name']
    case LOG_OUT:
      return null
    default:
      return currentState
  }

}

function userIdReducer(currentState = defaultState.userId, action) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload.id
    case LOG_IN:
      return action.payload.id
    case LOG_OUT:
      return null
    default:
      return currentState
  }

}

function readingIdReducer(currentState = defaultState.readingId, action) {
  switch (action.type) {
    case CREATE_READING:
      return action.payload.id
    case LOG_OUT:
      return 0
    case GO_HOME:
      return 0
    case DELETE_READING:
      return 0
    default:
      return currentState
  }
}

function readingsReducer(currentState = defaultState.readings, action) {
  switch (action.type) {
    case GET_READING:
      return [...currentState, action.payload]
    case FETCH_READINGS:
      return action.payload
    case UPDATE_READING:
      return currentState.map(readingObj => readingObj.id === action.payload.id ? action.payload : readingObj)
    case DELETE_READING:
      return currentState.filter(readingObj => readingObj.id !== action.payload)
    default:
      return currentState
  }
}

function questionReducer(currentState = defaultState.question, action) {
  switch (action.type) {
    case ASK_QUESTION:
      return action.payload
    default:
      return currentState
  }
}



const rootReducer = combineReducers({
  cards: cardsReducer,
  user: userReducer,
  userId: userIdReducer,
  readingId: readingIdReducer,
  readings: readingsReducer,
  question: questionReducer
})




export default rootReducer