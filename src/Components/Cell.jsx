// import React from 'react'
import { useContext, useEffect, useState } from "react"
import classNames from "classnames"
import cellsContext from "./cellsContext"

function Cell({id_,box_id,sizes}) {
  const {state,turn,changeTurn,dispatch,ACTIONS} = useContext(cellsContext)

  const cellStyle={
    width:sizes.factor*2+'rem',
    height:sizes.factor*2+'rem',
    padding:sizes.factor*0.25+'rem'
  }
  
  useEffect(() => {
    console.log(state.lastCell)
  },[state.lastCell])


  const handleClick = (e) =>{
    if (state.boxes[box_id].cells[id_].active&& state.boxes[box_id].won == undefined) {
      dispatch({type:ACTIONS.changeCell, payload:{active:false, value:state.turn,box_id:box_id,id_:id_}})
      dispatch({type:ACTIONS.checkWin, payload:{box_id:box_id}})
      dispatch({type:ACTIONS.checkGameWin})
      dispatch({type:ACTIONS.changeTurn})
      dispatch({type:ACTIONS.determineNextBox})
    }
  }

  return (
    <>
      <div className= {` bg-slate-50 w-${8*sizes.factor} h-${8*sizes.factor} transition hover:scale-110 active:scale-90 rounded `} style={cellStyle} onClick={handleClick}>
        <img src={state.boxes[box_id].cells[id_].url} className={classNames('',{"opacity-0":state.boxes[box_id].cells[id_].active})} />
      </div>
    </>
  )
}

export default Cell
