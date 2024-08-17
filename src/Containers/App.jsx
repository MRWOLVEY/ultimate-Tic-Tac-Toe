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
    checkGameWin:'checkGameWin',
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
                {state.gameStatus=='newGame'&&<div className="message flex flex-col justify-center max-w-80 h-100">
                    <h1 className="text-2xl font-bold">please select a box to start the game</h1>
                </div>}
                {state.gameStatus=='select'&&<div className="message flex flex-col justify-center max-w-80 h-100">
                    <h1 className="text-2xl font-bold">please select a box that is highlighted in white</h1>
                </div>}
                {state.gameStatus=='won'&&<div className="message flex flex-col justify-center max-w-80 h-100">
                    <h1 className="text-2xl font-bold">{state.winner}won the game</h1>
                    <h1 className="">score:{state.scores}</h1>
                </div>}
                {state.gameStatus=='turn'&&<Box className="" box_id={state.currentBox} sizes={sizes} boardItem={false} />}
                <Board/>
            </div>
        </cellsContext.Provider>
    )
}

export default App
