import { useContext, useEffect, useRef, useState,useReducer } from "react"
import './App.css'
import Box from "../Components/Box.jsx"
import cellsContext from "../Components/cellsContext.jsx"
import reducer from "../Components/cellsReducer.jsx"

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
    const initalState = useContext(cellsContext);
    const [state, dispatch] = useReducer(reducer, initalState);

    const resetGame= () => {
        const turn = useRef('x')
        dispatch({type:ACTIONS.resetStateAndTurn, payload:{turn:turn}})
    }

    const changeTurn = () => {
        turn.current = (turn.current === 'x') ? 'o' : 'x';
    }

    return (
        <cellsContext.Provider value={{state,dispatch,ACTIONS}}>
            <div className="App h-lvh lg:px-40 bg-gray flex items-center justify-center">
                <Box className="" box_id={state.currentBox}/>
            </div>
        </cellsContext.Provider>
    )
}

export default App
