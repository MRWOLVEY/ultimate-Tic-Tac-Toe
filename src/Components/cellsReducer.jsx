import { resetState } from "./cellsContext"
import xIcon from "../Assets/X.png"
import oIcon from "../Assets/O.png"

export default function reducer (state,action){

    switch(action.type){
        case 'resetStateAndTurn':
            return {
                boxes:resetState(),
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
                boxes:state.boxes.map((box,i)=>{
                    if(i==action.payload.box_id){
                        return{
                            ...box,
                            cells:box.cells.map((cell,j)=>{
                                if(j==action.payload.id_){
                                    return{
                                        ...cell,
                                        active:false,
                                        url:action.payload.value=='X'? xIcon:oIcon,
                                        value:action.payload.value,
                                    }
                                }
                                return cell
                            })
                        }
                    }
                    return box
                })
            }
        default: return state
    }
}
