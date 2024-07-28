import { resetState } from "./cellsContext"
import xIcon from "../Assets/X.png"
import oIcon from "../Assets/O.png"

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
        case 'changeCell':
            return{
                ...state,
                games:state.games.map((game,i)=>{
                    if(i==action.payload.game_id){
                        return{
                            ...game,
                            cells:game.cells.map((cell,j)=>{
                                if(j==action.payload.id_){
                                    return{
                                        ...cell,
                                        active:false,
                                        // url:action.payload.value==='x'?xIcon:oIcon,
                                        value:action.payload.value,
                                    }
                                }
                                return cell
                            })
                        }
                    }
                    return game
                })
            }
        default: return state
    }
}
