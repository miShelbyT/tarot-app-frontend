import {combineReducers} from 'redux'
import { GET_CARDS } from './actionTypes'


const defaultState = {
    cards : []
}


function cardsReducer(currentState = defaultState.cards, action){

    switch(action.type) {
        case GET_CARDS:
            return action.payload
        default:
            return currentState
    }

}




const rootReducer = combineReducers({
    cards: cardsReducer
})




export default rootReducer