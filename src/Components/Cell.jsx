// import React from 'react'
import { useContext, useEffect, useState } from "react"
import classNames from "classnames"
import ph from "../Assets/O.png"
import cellsContext from "./cellsContext"

function Cell({url,handler,activeprop,id_,box_id}) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    //
  },[])

  const {state,turn,changeTurn,dispatch,ACTIONS} = useContext(cellsContext)

  const handleClick = (e) =>{
    if (state.boxes[box_id].cells[id_].active) {
      dispatch({type:ACTIONS.changeCell, payload:{active:false, value:turn.current,box_id:box_id,id_:id_}})
      changeTurn()
    }
  }

  return (
    <>
      <div className="bg-slate-50 w-32 min-h-32 p-4 transition hover:scale-110 active:scale-90 rounded" onClick={handleClick}>
        <img src={state.boxes[box_id].cells[id_].url} className={classNames('',{"opacity-0":active})} />
      </div>
    </>
  )
}

export default Cell
