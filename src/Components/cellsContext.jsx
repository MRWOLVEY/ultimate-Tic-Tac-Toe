import React, { useRef } from 'react'

export const resetState=()=>{
    const boxes = [];
    for (let i = 0; i < 9; i++) {
        const box = { 
            cells: [],
            'won': undefined,
            position_url:"",
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
})

export default cellsContext