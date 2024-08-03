import { resetState } from "./cellsContext"
import xIcon from "../Assets/X.png"
import oIcon from "../Assets/O.png"


const checkBoxWin = (state,box_id) =>{
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
      
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
          state.boxes[box_id].cells[a].value == state.boxes[box_id].cells[b].value&& 
          state.boxes[box_id].cells[a].value == state.boxes[box_id].cells[c].value&&
          state.boxes[box_id].cells[a].value !== "")
        {
        //   dispatch({type:ACTIONS.setWin, payload:{box_id:box_id}})
        return true
        }
      }
    return false
}

export default function reducer (state,action){

    switch(action.type){
        case 'resetStateAndTurn':
            return {
                boxes:resetState(),
                turn:'x',
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
                                        url:action.payload.value=='x'? xIcon:oIcon,
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
        case 'checkWin':
            const win=checkBoxWin(state,action.payload.box_id)
            if (win){
                return{
                    ...state,
                    boxes:state.boxes.map((box,i)=>{
                        if(i==action.payload.box_id){
                            return{
                                ...box,
                                won:state.turn,
                            }
                        }
                        return box
                    })
                }
            }
        default: return state
    }
}
