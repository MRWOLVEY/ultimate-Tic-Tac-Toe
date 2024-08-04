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
}

const App = () => {
    useEffect(() => {
        //
    },[])
    //
    const sizes={

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
            <div className="App h-lvh lg:px-40 bg-gray flex items-center justify-around">
                <Box className="w-" box_id={0} sizes={sizes} />
                {/* <Board/> */}
            </div>
        </cellsContext.Provider>
    )
}

export default App
