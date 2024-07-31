import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"

function Box({children,box_id}) {
  useEffect(()=>{
    //
  },[])
  const {state,dispatch,ACTIONS} = useContext(cellsContext);

  return (
    <div className='grid grid-cols-[8rem_8rem_8rem] gap-4 bg-zinc-700 w-fit'>
      {
        state.boxes[box_id].cells.map((cell,i)=>{
          return <Cell key={i} box_id={box_id} id_={i}/>
        })
      }
    </div>
  )
}

export default Box