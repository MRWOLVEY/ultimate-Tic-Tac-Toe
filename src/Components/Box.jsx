import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"
import classNames from 'classnames'

function Box({children,box_id,sizes}) {
  const {state,dispatch,ACTIONS} = useContext(cellsContext);

  useEffect(()=>{
    //
  },[])

    if (state.boxes[box_id].won == undefined){
      return (
      <div className='grid grid-rows-[2rem_2rem_2rem] grid-cols-3 gap-1 bg-slate-800 p-1 h-fit rounded relative z-10'>
      {
        state.boxes[box_id].cells.map((cell,i)=>{
          return <Cell key={i} box_id={box_id} id_={i}/>
        })
      }
    </div>
      )
    }
    else{
      return (
    <div className={classNames('wining_grid bg-slate-50 p-4 rounded absolute z-20 w-[440px] h-[440px]',{})}>
      <img src={state.boxes[box_id].url}/>
    </div>
      )
    }
}

export default Box