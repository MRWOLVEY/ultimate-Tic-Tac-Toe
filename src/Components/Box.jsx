import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"

function Box({children,box_id}) {
  useEffect(()=>{
    //
  },[])
  const {state,dispatch,ACTIONS} = useContext(cellsContext);

  return (
    <>
      {
        state.boxes[box_id].cells.map((cell,i)=>{
          return <Cell key={i} box_id={box_id} id_={i}/>
        })
      }
    </>
  )
}

export default Box