import React, { useEffect, useState,useContext } from 'react'
import Cell from './Cell'
import cellsContext from "./cellsContext"
import classNames from 'classnames'
import "../Containers/App.css"

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
        <div>
          <div className={classNames('grid grid-cols-3 bg-green-800 h-fit rounded relative transition ',{'hover:scale-105 active:scale-95 active_box':boardItem&&state.boxes[box_id].won == undefined&&state.gameStatus=='newGame'||boardItem&&state.boxes[box_id].won == undefined&&state.gameStatus=='select','current_box':boardItem&&state.currentBox==box_id&&state.gameStatus=='turn'})} style={boxStyle}>
            {
              state.boxes[box_id].cells.map((cell,i)=>{
                return <Cell key={i} box_id={box_id} id_={i} sizes={sizes}/>
              })
            }
            {boardItem&&<div className="absolute inset-0 bg-transparent pointer-events-auto rounded" onClick={()=>state.gameStatus=='newGame'||state.gameStatus=='select'?dispatch({type:ACTIONS.setNextBox, payload:{box_id:box_id}}):null}></div>}
          </div> 

        </div>
      )
    }
    else{
      return (
        <>
          <div className={classNames(' bg-slate-50 rounded',{'wining_grid':boardItem&&state.gameStatus=='select'})} style={overlayStyle} >
            <img src={state.boxes[box_id].url} className=""/>
          </div>
        </>
      )
    }
}

export default Box