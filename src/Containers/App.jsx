import { useContext, useEffect, useRef, useState,useReducer } from "react"
import './App.css'
import Box from "../Components/Box.jsx"
import cellsContext from "../Components/cellsContext.jsx"
import reducer from "../Components/cellsReducer.jsx"
import Board from "../Components/Board.jsx"

const ACTIONS={
    resetStateAndTurn:'resetStateAndTurn',
    changeTurn:'changeTurn',
    changeCell:'changeCell',
    checkWin:'checkWin',
    determineNextBox:'determineNextBox',
    setNextBox:'setNextBox',
}

const App = () => {
    useEffect(() => {
        //
    },[])
    //
    const sizes={
        rows:'6rem 6rem 6rem',
        gap:3,
        factor:3,
        overlay:'21rem',
    }

    const initalState = useContext(cellsContext);
    const [state, dispatch] = useReducer(reducer, initalState);

    const resetGame= () => {
        const turn = 'x'
        dispatch({type:ACTIONS.resetStateAndTurn, payload:{turn:turn}})
    }

    const changeTurn = () => {
        turn.current = (turn.current === 'x') ? 'o' : 'x';
    }

    return (
        <cellsContext.Provider value={{state,dispatch,ACTIONS}}>
            <div className="App h-lvh lg:px-32 xl:px-60 bg-gray flex flex-col lg:flex-row items-center justify-between">
                <Box className="" box_id={0} sizes={sizes} boardItem={false} />
                <Board/>
            </div>
        </cellsContext.Provider>
    )
}

export default App
