import { useContext, useEffect, useRef, useState,useReducer } from "react"
import './App.css'
import Box from "../Components/Box.jsx"
import cellsContext from "../Components/cellsContext.jsx"
import reducer from "../Components/cellsReducer.jsx"
import Board from "../Components/Board.jsx"

const ACTIONS={
    reset:'reset',
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
        dispatch({type:ACTIONS.reset, payload:{turn:turn}})
    }

    return (
        <cellsContext.Provider value={{state,dispatch,ACTIONS}}>
            <div className="App h-lvh lg:px-32 xl:px-60 bg-gray flex flex-col gap-3 lg:flex-row items-center justify-between">
                {state.gameStatus=='newGame'&&<div className="message flex flex-col gap-3 justify-center max-w-80 h-100">
                    <h1 className="text-4xl font-bold text-center">please select a box to start the game</h1>
                    <p className="text-center text-3xl">score</p>
                    <div className="flex justify-between">
                        <span>player X <br />{state.scores[0]}</span>
                        <span>player O <br />{state.scores[1]}</span>
                    </div>
                </div>}

                {state.gameStatus=='won'&&<div className="message flex flex-col gap-3 justify-center max-w-80 h-100">
                    <h1 className="text-4xl">player <span className="text-5xl">{state.winner}</span> won the game</h1>
                    <p className="text-center text-3xl">score</p>
                    <div className="flex justify-between">
                        <span>player X <br />{state.scores[0]}</span>
                        <span>player O <br />{state.scores[1]}</span>
                    </div>
                    <button className="btn text-2xl transition hover:scale-110 active:scale-90 rounded" onClick={resetGame}>Play Again</button>
                </div>}

                {state.gameStatus=='select'&&<div className="message flex flex-col justify-center max-w-80 h-100">
                    <h1 className="text-4xl">please select a box that is highlighted in white</h1>
                </div>}
                
                {state.gameStatus=='turn'&&<Box className="" box_id={state.currentBox} sizes={sizes} boardItem={false} />}
                <Board/>
            </div>
        </cellsContext.Provider>
    )
}

export default App
