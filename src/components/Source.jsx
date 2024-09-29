import { useContext } from "react";
import { DarkContext } from "../context/DarkContext";

import React from 'react'

function Source({label,url}) {
    const {dark} = useContext(DarkContext)
  return (
    <div className={!dark?"w-fit py-1 px-2 bg-stone-200 absolute top-0 right-0 mt-2 mr-2 rounded-lg text-slate-800 font-font-poppins text-xs hover:scale-[1.05] shadow-md transition-all duration-200 ease-in-out max-[450px]:text-[8px] max-[400px]:text-[6px]":
    "w-fit py-1 px-2 bg-neutral-600 absolute top-0 right-0 mt-2 mr-2 rounded-lg text-slate-200 font-font-poppins text-xs hover:scale-[1.05] shadow-md transition-all duration-200 ease-in-out max-[450px]:text-[8px] max-[400px]:text-[6px]"}>
        <a href={url} target="_blank" className="">{label}</a>
    </div>
  )
}

export default Source
