import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"

function Game({children,game_id}) {
  useEffect(()=>{
    //
  },[])
  const {state,dispatch,ACTIONS} = useContext(cellsContext);

  return (
    <>
      {
        state.games[game_id].cells.map((cell,i)=>{
          return <Cell key={i} game_id={game_id} id_={i}/>
        })
      }
    </>
  )
}

export default Game