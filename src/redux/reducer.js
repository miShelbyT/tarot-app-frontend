import {combineReducers} from 'redux'
import { GET_CARDS, ADD_USER, FIND_USER, LOG_OUT } from './actionTypes'


const defaultState = {
    cards : [],
    user : null
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
        case ADD_USER:
            return action.payload['user_name']
        case FIND_USER:
            return action.payload['user_name']
        case LOG_OUT:
            return null
        default:
            return currentState
    }
    
}




const rootReducer = combineReducers({
    cards: cardsReducer,
    user: userReducer
})




export default rootReducer