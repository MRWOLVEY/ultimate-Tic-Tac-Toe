import { resetState } from "./cellsContext"


export default function reducer (state,action){

    switch(action.type){
        case 'resetStateAndTurn':
            return {
                games:resetState(),
                turn:'x',
            }
        case 'resetTurn':
            return{
                ...state,
                turn:'x'
            }
        case 'changeTurn':
            return{
                ...state,
                turn: state.turn==='x'? 'o':'x'
            }
        default: return state
    }
}
