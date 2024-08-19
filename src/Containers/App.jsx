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
            <div className="App min-h-lvh lg:px-32 xl:px-60 pb-4 bg-amber-200 flex flex-col gap-8">
                <h1 className="text-5xl font-bold flex items-center justify-center text-center text-orange-500 h-24">Ultimate Tic-Tac-Toe</h1>
                <div className="Game flex flex-col gap-4 lg:flex-row items-center justify-between w-100">
                    {state.gameStatus=='newGame'&&<div className="message flex flex-col gap-3 justify-center max-w-80 h-100">
                        <h1 className="text-4xl font-bold text-center">please select a box to start the game</h1>
                        <p className="text-center text-3xl border-2 w-fit border-orange-500 p-1 rounded">score</p>
                        <div className="flex justify-between border-2 border-orange-500 p-1 rounded">
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
                <div className="flex justify-center w-100"><iframe width="560" height="315" src="https://www.youtube.com/embed/zP4GFgXTY4M?si=DLUSkeOHa7IMN4vD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </div>
        </cellsContext.Provider>
    )
}

export default App
