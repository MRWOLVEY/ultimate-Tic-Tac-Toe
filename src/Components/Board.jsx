import React from 'react'
import Box from './Box'
import { useContext } from 'react'
import cellsContext from './cellsContext';

function Board() {
    const {state,dispatch,ACTIONS} = useContext(cellsContext);
    const sizes={
      rows:'2rem 2rem 2rem',
      gap:1,
      factor:1,
      overlay:'7rem',
  }

  return (
    <>
    <div className='grid grid-rows-[7rem_7rem_7rem] grid-cols-3 gap-1 bg-slate-800 p-3 h-fit rounded relative z-10'>
        {
            state.boxes.map((box,i)=>{
                return <Box className="" box_id={i} key={i} sizes={sizes}/>
            })
        }
    </div>
    </>
  )
}

export default Board