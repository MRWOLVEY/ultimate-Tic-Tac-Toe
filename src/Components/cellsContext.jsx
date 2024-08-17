import React,{ useContext } from "react";

export const resetBoxes=()=>{
    const boxes = [];
    for (let i = 0; i < 9; i++) {
        const box = { 
            cells: [],
            'won': undefined,
            'url':'',
         };
        for (let j = 0; j < 9; j++) {
        box.cells.push({
            'url':"",
            'value':"",
            'active':true,

        });
        }
        boxes.push(box);
    }
    
    return boxes;
}

const cellsContext= React.createContext({
    boxes: resetBoxes(),
    turn:'x',
    currentBox:undefined,
    lastCell:undefined,
    scores:[0,0],
    gameStatus:'newGame',//newGame,select,turn,won
})

export default cellsContext