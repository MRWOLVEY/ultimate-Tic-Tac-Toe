import React,{ useContext } from "react";

export const resetState=()=>{
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
    boxes: resetState(),
    turn:'x',
    nextBox:undefined,//this will be used to determine in which box the next play will play
    currentBox:0,
    lastCell:undefined,
})

export default cellsContext