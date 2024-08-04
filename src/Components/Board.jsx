import React from 'react'
import Box from './Box'
import { useContext } from 'react'
import cellsContext from './cellsContext';

function Board() {
    const {state,dispatch,ACTIONS} = useContext(cellsContext);

  return (
    <>
    <div className='grid grid-rows-[8rem_8rem_8rem] grid-cols-3 gap-4 bg-slate-800 p-3 h-fit rounded relative z-10'>
        {
            state.boxes.map((box,i)=>{
                return <Box className="" box_id={i}/>
            })
        }
    </div>
    </>
  )
}

export default Board