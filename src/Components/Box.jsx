import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"
import classNames from 'classnames'

function Box({children,box_id,sizes}) {
  const {state,dispatch,ACTIONS} = useContext(cellsContext);

  const {rows,gap,factor,overlay}=sizes
  useEffect(()=>{
  },)

    if (state.boxes[box_id].won == undefined){
      return (
      <div className={`grid grid-rows-[${rows}] grid-cols-3 gap-${gap} bg-slate-800 p-${factor} h-fit rounded relative z-10`}>
      {
        state.boxes[box_id].cells.map((cell,i)=>{
          return <Cell key={i} box_id={box_id} id_={i} sizes={sizes}/>
        })
      }
    </div>
      )
    }
    else{
      return (
    <div className={`wining_grid bg-slate-50 p-${sizes.factor} rounded absolute z-20 w-${overlay} h-${overlay}`}>
      <img src={state.boxes[box_id].url} className=""/>
    </div>
      )
    }
}

export default Box