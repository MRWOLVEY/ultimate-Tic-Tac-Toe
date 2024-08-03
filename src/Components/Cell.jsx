// import React from 'react'
import { useContext, useEffect, useState } from "react"
import classNames from "classnames"
import cellsContext from "./cellsContext"

function Cell({id_,box_id}) {
  const {state,turn,changeTurn,dispatch,ACTIONS} = useContext(cellsContext)
  
  useEffect(() => {
    //
  })


  const handleClick = (e) =>{
    if (state.boxes[box_id].cells[id_].active) {
      dispatch({type:ACTIONS.changeCell, payload:{active:false, value:state.turn,box_id:box_id,id_:id_}})
      dispatch({type:ACTIONS.checkWin, payload:{box_id:box_id}})
      dispatch({type:ACTIONS.changeTurn})
    }
  }

  return (
    <>
      <div className="bg-slate-50 w-32 h-32 p-4 transition hover:scale-110 active:scale-90 rounded" onClick={handleClick}>
        <img src={state.boxes[box_id].cells[id_].url} className={classNames('',{"opacity-0":state.boxes[box_id].cells[id_].active})} />
      </div>
    </>
  )
}

export default Cell
