// import React from 'react'
import { useEffect, useState } from "react"
import classNames from "classnames"
import ph from "../Assets/O.png"
import xIcon from "../Assets/X.png"
import oIcon from "../Assets/O.png"

function Cell({url,handler,activeprop}) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    activeprop?setActive(true):setActive(false)
  },[])

  const lol = (e) =>{
    handler(e,  "lol")
  }

  return (
    <>
      <div className="bg-slate-50 w-32 p-4 transition hover:scale-110 active:scale-90 rounded h-32" onClick={lol}>
        <img src={url?url:ph} className={classNames('',{"opacity-0":active})} />
      </div>
      {/* <span className="relative -left-28 z-10 h-32 w-36"></span> */}
    </>
  )
}

export default Cell
