// import React from 'react'
import { useContext, useEffect, useState } from "react"
import classNames from "classnames"
import ph from "../Assets/O.png"
import cellsContext from "./cellsContext"

function Cell({url,handler,activeprop,id_,game_id}) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    activeprop?setActive(true):setActive(false);
    // console.log(state)
  },[])

  useEffect(() => {
    console.log(state.games[0].cells[0].value)
  },)

  const {state,dispatch,ACTIONS} = useContext(cellsContext)

  const lol = (e) =>{
    // handler(e,  state.games[0])
    // console.log(state.games[game_id].cells[id_]) //accessing reducer state for single cell
    // dispatch({type:ACTIONS.changeTurn})
    // console.log(state)
    dispatch({type:ACTIONS.changeCell,payload:{id_:id_,game_id:game_id,value:'o'}})
  }


  return (
    <>
      <div className="bg-slate-50 w-32 h-32 p-4 transition hover:scale-110 active:scale-90 rounded" onClick={lol}>
        <img src={url?url:ph} className={classNames('',{"opacity-0":active})} />
      </div>
    </>
  )
}

export default Cell
