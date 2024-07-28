import { useContext, useEffect, useRef, useState,useReducer } from "react"
// import TTTgrid from "../Components/TTTgrid.jsx"
import './App.css'
import Game from "../Components/Game.jsx"
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
                <Game className="">
                    <Cell url={xIcon} handler={handleAtomClick} activeprop={false} game_id="0" id_="0"/>
                    <Cell url={oIcon} handler={handleAtomClick} activeprop={false} game_id="0" id_="1"/>
                    <Cell handler={handleAtomClick} activeprop={true} game_id="0" id_="2"/>
                </Game>

            </div>
        </cellsContext.Provider>
    )
}

export default App
