import {combineReducers} from 'redux'
import { GET_CARDS, SIGN_UP, LOG_IN, LOG_OUT } from './actionTypes'


const defaultState = {
    cards : [],
    user : null,
    userId : 0
}


function cardsReducer(currentState = defaultState.cards, action){

    switch(action.type) {
        case GET_CARDS:
            return action.payload
        default:
            return currentState
    }

}

function userReducer(currentState = defaultState.user, action){
        switch(action.type) {
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

function userIdReducer(currentState = defaultState.userId, action){
    switch(action.type) {
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



const rootReducer = combineReducers({
    cards: cardsReducer,
    user: userReducer,
    userId: userIdReducer
})




export default rootReducer