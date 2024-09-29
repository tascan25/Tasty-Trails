import React from 'react'
import { DarkContext } from '../context/DarkContext'
import { useContext } from 'react'
function Macros({label,quantity,unit}) {
  const {dark} = useContext(DarkContext)
  return (
    <li className={!dark?'flex gap-2 w-fit py-1 px-2 bg-neutral-200 rounded-lg':'flex gap-2 w-fit py-1 px-2 bg-neutral-700 rounded-lg'}>
      <span className={!dark?'text-slate-500  text-sm max-[450px]:text-xs':'text-slate-100 text-sm max-[450px]:text-xs'}>{label} :</span>
      <span className={!dark?'text-slate-600 text-sm max-[450px]:text-xs':'text-slate-300 text-sm max-[450px]:text-xs'}>{quantity}&nbsp;{unit}</span>
    </li>
  )
}

export default Macros
