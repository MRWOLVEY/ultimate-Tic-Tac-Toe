import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"
import classNames from 'classnames'
import "./box.css"

function Box({children,box_id,sizes}) {
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
            <div className={classNames('grid grid-cols-3 bg-slate-800 h-fit rounded',{'active_box':state.selectBox})} style={boxStyle}>
              {
                state.boxes[box_id].cells.map((cell,i)=>{
                  return <Cell key={i} box_id={box_id} id_={i} sizes={sizes}/>
                })
              }
            </div>
        </>
      )
    }
    else{
      return (
        <>
          <div className={classNames(' bg-slate-50 rounded',{'wining_grid':state.selectBox})} style={overlayStyle} >
            <img src={state.boxes[box_id].url} className=""/>
          </div>
        </>
      )
    }
}

export default Box