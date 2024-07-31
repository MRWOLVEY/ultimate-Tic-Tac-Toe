import { useContext, useEffect, useRef, useState,useReducer } from "react"
// import TTTgrid from "../Components/TTTgrid.jsx"
import './App.css'
import Box from "../Components/Box.jsx"
import Cell from "../Components/Cell.jsx"
import cellsContext from "../Components/cellsContext.jsx"
import reducer from "../Components/cellsReducer.jsx"
import xIcon from "../Assets/X.png"
import oIcon from "../Assets/O.png"

const ACTIONS={
    resetStateAndTurn:'resetStateAndTurn',
    resetTurn:'resetTurn',
    changeTurn:'changeTurn',
    changeCell:'changeCell',
}

const App = () => {
    const turn = useRef('X')
    const changeTurn = () => {
        turn.current = (turn.current === 'X') ? 'O' : 'X';
    }
    useEffect(() => {
        // console.log(initalState)
    },[])
    //
    const initalState = useContext(cellsContext);
    const [state, dispatch] = useReducer(reducer, initalState);

    const handleAtomClick = (e,msg) => {
        console.log(e.target);
        console.log(msg);
    }
    const checkBoxWin = (box_id) =>{
        const box=state.boxes[box_id]
        if (box.cells[0].value===box.cells[1].value && box.cells[0].value===box.cells[2].value){

        }
        if (box.cells[3].value===box.cells[4].value && box.cells[3].value===box.cells[5].value){

        }
        if (box.cells[6].value===box.cells[7].value && box.cells[6].value===box.cells[8].value){

        }
        if (box.cells[0].value===box.cells[3].value && box.cells[0].value===box.cells[6].value){

        }
        if (box.cells[1].value===box.cells[4].value && box.cells[1].value===box.cells[7].value){

        }
        if (box.cells[2].value===box.cells[5].value && box.cells[2].value===box.cells[8].value){

        }
        if (box.cells[0].value===box.cells[4].value && box.cells[0].value===box.cells[8].value){

        }
        if (box.cells[2].value===box.cells[4].value && box.cells[2].value===box.cells[6].value){
            
        }
        
    }

    return (
        <cellsContext.Provider value={{turn,changeTurn,state,dispatch,ACTIONS}}>
            <div className="App h-lvh lg:px-40 bg-gray flex items-center justify-start">
                <Box className="" box_id={0}/>
            </div>
        </cellsContext.Provider>
    )
}

export default App
