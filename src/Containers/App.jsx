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

    return (
        <cellsContext.Provider value={{turn,changeTurn,state,dispatch,ACTIONS}}>
            <div className="App h-lvh lg:px-40 bg-gray flex">
                <Box className="" box_id={0}/>
            </div>
        </cellsContext.Provider>
    )
}

export default App
