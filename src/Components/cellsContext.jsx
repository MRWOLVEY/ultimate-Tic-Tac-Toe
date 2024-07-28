import React, { useRef } from 'react'

export const resetState=()=>{
    const games = [];
    for (let i = 0; i < 9; i++) {
        const game = { 
            cells: [],
            'won': undefined,
         };
        for (let j = 0; j < 9; j++) {
        game.cells.push({
            'url':"",
            'value':"",
            'active':true,

        });
        }
        games.push(game);
    }
    
    return games;
}

const cellsContext= React.createContext({
    games: resetState(),
    turn:'x',
})

export default cellsContext