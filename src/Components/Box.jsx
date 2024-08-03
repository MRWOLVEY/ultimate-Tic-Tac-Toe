import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"

function Box({children,box_id}) {
  const {state,dispatch,ACTIONS} = useContext(cellsContext);

  useEffect(()=>{
    //
  },[])

  return (
    <>
    <div className="wining_grid absolute z-20 bg-black w-[440px] h-[440px] hidden"></div>
    <div className='grid grid-rows-[8rem_8rem_8rem] grid-cols-3 gap-4 bg-slate-800 p-3 h-fit rounded relative z-10'>
        {
          state.boxes[box_id].cells.map((cell,i)=>{
            return <Cell key={i} box_id={box_id} id_={i}/>
          })
        }
    </div>
    </>
  )
}

export default Box