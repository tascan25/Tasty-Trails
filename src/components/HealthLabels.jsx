import React, { useContext } from 'react'
import { DarkContext } from '../context/DarkContext'
function HealthLabels({label}) {
  const {dark} = useContext(DarkContext)
  return (
    <>
        <span className={!dark?'w-fit px-2 py-1 whitespace-nowrap text-sm bg-neutral-200 rounded-lg shadow-lg font-mono text-slate-600 max-[450px]:text-xs max-[400px]:text-[12px]':
      'w-fit px-2 py-1 whitespace-nowrap text-sm bg-[#232121] rounded-lg shadow-lg font-mono text-slate-200 max-[450px]:text-xs max-[400px]:text-[12px]'}>{label}</span>
    </>
  )
}

export default HealthLabels
