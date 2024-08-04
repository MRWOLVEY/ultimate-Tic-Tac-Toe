import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"
import classNames from 'classnames'

function Box({children,box_id}) {
  const {state,dispatch,ACTIONS} = useContext(cellsContext);

  useEffect(()=>{
    //
  },[])

  return (
    <>
    <div className={classNames('wining_grid bg-slate-50 p-4 rounded absolute z-20 w-[440px] h-[440px]',{"hidden":state.boxes[box_id].won == undefined})}>
      <img src={state.boxes[box_id].url}/>
    </div>
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