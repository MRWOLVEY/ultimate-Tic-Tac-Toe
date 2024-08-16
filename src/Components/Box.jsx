import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"
import classNames from 'classnames'

function Box({children,box_id,sizes,boardItem}) {
  const {state,dispatch,ACTIONS} = useContext(cellsContext);
  const overlayStyle={
    width:sizes.overlay,
    height:sizes.overlay,
    padding:sizes.factor*0.25+'rem',
  }

  const boxStyle={
    gridTemplateRows:sizes.rows,
    padding:sizes.factor*0.25+'rem',
    gap:sizes.factor*0.25+'rem',
  }

  useEffect(()=>{
  },)

    if (state.boxes[box_id].won == undefined){
      return (
        <>
          <div className={classNames('grid grid-cols-3 bg-slate-800 h-fit rounded relative transition ',{'hover:scale-105 active:scale-95':boardItem&&state.boxes[box_id].won == undefined})} style={boxStyle}>
            {
              state.boxes[box_id].cells.map((cell,i)=>{
                return <Cell key={i} box_id={box_id} id_={i} sizes={sizes}/>
              })
            }
            {boardItem&&<div className="absolute inset-0 bg-transparent pointer-events-auto rounded" onClick={()=>dispatch({type:ACTIONS.setNextBox, payload:{box_id:box_id}})}></div>}
          </div> 
        </>
      )
    }
    else{
      return (
    <div className={`wining_grid bg-slate-50 rounded`} style={overlayStyle} >
      <img src={state.boxes[box_id].url} className=""/>
    </div>
      )
    }
}

export default Box