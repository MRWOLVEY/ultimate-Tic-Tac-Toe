import { useContext, useEffect, useRef, useState,useReducer } from "react"
// import TTTgrid from "../Components/TTTgrid.jsx"
import './App.css'
import Cell from "../Components/Cell.jsx"
import cellsContext from "../Components/cellsContext.jsx"
import reducer from "../Components/cellsReducer.jsx"
import xIcon from "../Assets/X.png"
import oIcon from "../Assets/O.png"

const App = () => {
    const turn = useRef('X')
    const changeTurn = () => {
        turn.current = (turn.current === 'X') ? 'O' : 'X';
    }
    useEffect(() => {

    },[])
    //
    const initalState = useContext(cellsContext);
    const [state, dispatch] = useReducer(reducer, initalState);

    const handleAtomClick = (e,msg) => {
        console.log(e.target);
        console.log(msg);
    }

    return (
        <cellsContext.Provider value={{turn,changeTurn,state,dispatch}}>
            <div className="App h-lvh lg:px-40 bg-gray flex">
                <Cell url={xIcon} handler={handleAtomClick} activeprop={false}/>
                <Cell url={oIcon} handler={handleAtomClick} activeprop={false}/>
                <Cell handler={handleAtomClick} activeprop={true}/>

            </div>
        </cellsContext.Provider>
    )
}


export default App

//
// const [items, setItems] = useState([])

// useEffect(() => {
//     const initItems=[];
//     for (let i = 0; i < 9; i++) {
//         initItems.push(<div className="bg-neutral-700 hover:bg-blue-700 text-white font-bold py-2 px-4 br- flex justify-center items-center" id={i}>{i}</div>)
//     }
//     setItems(initItems)
// },[])


//     return (
//         <div className="App h-lvh lg:px-40 bg-gray">
//             <TTTgrid className="h-full bg-black border-8 border-red-950">{items}</TTTgrid>
//         </div>
        
//     )